import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { get_discover_movie, get_discover_tv } from "../helpers/server";
import Pagination from "../components/Pagination";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function People() {
  let { genre_id, genre, genre_name } = useParams();
  let [data, setData] = useState([]);
  let [page, setPage] = useState();
  let [numberOfPages, setNumberOfPages] = useState();
  let [loading, setLoading] = useState(true);
  let [error,setError]=useState(false);


  useEffect(() => {
    setLoading(true);
    if (genre === "movie") {
      get_discover_movie(page, genre_id).then((response) => {
        setData(response.results);
        setNumberOfPages(response.total_pages);
      }).catch((e) => {
        setError(true)
      }).finally(() =>{
        setLoading(false);
      });
    } else {
      get_discover_tv(page, genre_id).then((response) => {
        setData(
          response.results.map((item) => {
            return {
              ...item,
              title: item.name,
            };
          })
        );
        setNumberOfPages(response.total_pages);
      }).catch((e) => {
        setError(true)
      }).finally(() =>{
        setLoading(false);
      });
    }
    
  }, [page, genre]);

  return (
    <div>
      <Nav />
      <h1>{genre_name}</h1>
      <div className="flex auto">
        {data.map((item, index) => {
          let img_url = "https://www.themoviedb.org/t/p/w220_and_h330_face/";
          let img_movie = `${img_url}${item.poster_path}`;
          return (
            <div key={index}>
              <div className="Pages_Picflex">
                <Link to={`/${genre}/${item.id}`}>
                  <img className="Pages_Image" src={img_movie} />
                </Link>
                <div className="Pages_Chart">
                  <CircularProgressbar
                    background={true}
                    styles={{
                      path: { stroke: "#cbd842" },
                      trail: { stroke: "grey" },
                      text: { fill: "white", fontSize: "24px" },
                      background: { fill: "#232328" },
                    }}
                    value={Math.round(item.vote_average * 10)}
                    text={`${Math.round(item.vote_average * 10)}%`}
                  />
                </div>
              </div>
              <br />
              <Link to={`/${genre}/${item.id}`}>
                <div className="Pages_Title">{item.title}</div>
              </Link>
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
