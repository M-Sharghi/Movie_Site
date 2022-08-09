import Nav from "../components/Nav";
import Footer from "../components/Footer";
import {useState, useEffect} from "react";
import {get_discover_movie} from "../helpers/server";
import Pagination from "../components/Pagination";
import { useParams } from "react-router-dom";
import {Link} from "react-router-dom";



function People(){
    let { genres_id } = useParams();
    let [data, setData] = useState([]);
    let [page, setPage]=useState();
    let [numberOfPages, setNumberOfPages]=useState();
    let [loading,setLoading]=useState(false);
    console.log(data);
  
    useEffect(() => {
        setLoading(true);
        get_discover_movie(page).then((response) => {
            setData(response.results)
            setNumberOfPages(response.total_pages);
            setLoading(false); 
      });
    }, [page]);


    return (
        <div>
            <Nav />
            <h1>{genres_id}</h1>
            {data.map((item, index) => {
                let img_url="https://www.themoviedb.org/t/p/w220_and_h330_face/";
                let img_movie=`${img_url}${item.poster_path}`;
                return (
                    <div key={index}>
                        <Link to={`/movie/${item.id}`}><img src={img_movie} /></Link>
                            {item.genre_ids.map((subitem) => {
                            let genre = genres_id == subitem ? `${item.title}` : "" ;   
                                return (
                                    <div>{genre}</div> 
                                );
                            })}
                    </div>
                );
            })};
            <Pagination setPage={setPage} pageNumber={500} />                      
            <Footer />
        </div>
    )
}

export default People;