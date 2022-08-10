import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { get_discover_movie, get_discover_tv } from "../helpers/server";
import Pagination from "../components/Pagination";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function People() {
  let { genre_id, genre, genre_name } = useParams();
  let [data, setData] = useState([]);
  let [page, setPage] = useState();
  let [numberOfPages, setNumberOfPages] = useState();
  let [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    if (genre === "movie") {
        get_discover_movie(page,genre_id).then((response) => {
            setData(response.results);
            setNumberOfPages(response.total_pages);
            setLoading(false);
        });
        } else {
        get_discover_tv(page,genre_id).then((response) => {
            setData(response.results.map((item)=>{
                return {
                    ...item,
                    title: item.name
                }}));
            setNumberOfPages(response.total_pages);
            setLoading(false);
      });
    }
  }, [page,genre]);

  return (
    <div>
        <Nav />
        <h1>{genre_name}</h1>
        <div className="flex auto">
            {data.map((item, index) => {
            let img_url ="https://www.themoviedb.org/t/p/w220_and_h330_face/";
            let img_movie = `${img_url}${item.poster_path}`;
                return (
                    <div key={index} style={{ width: 235 }}>
                        <div>
                            <Link to={`/movie/${item.id}`}>
                                <img className="Image" src={img_movie} />
                            </Link>
                            <Link to={`/movie/${item.id}`} style={{ height: 10 }}>
                                {item.title}
                            </Link>
                        </div>
                    </div>
                );
            })}
        </div>
        <Pagination setPage={setPage} pageNumber={numberOfPages} />
        <Footer />
    </div>
  );
}

export default People;
