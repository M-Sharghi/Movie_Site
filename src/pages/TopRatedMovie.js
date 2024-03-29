import Nav from "../components/Nav";
import TopRatedMovie from "../components/TopRatedMovie";
import Footer from "../components/Footer";
import {useState, useEffect} from "react";
import {get_top_rated_movie} from "../helpers/server";
import Pagination from "../components/Pagination";
import Search from "../components/MovieSearch";


function Top_Rated_Movie(){
    let [data, setData] = useState([]);
    let [page, setPage]=useState();
    let [numberOfPages, setNumberOfPages]=useState();
    let [loading,setLoading]=useState(true);
    let [error,setError]=useState(false);


    useEffect(() => {
        setLoading(true);
        get_top_rated_movie(page).then((response) => {
        setData(response.results);
        setNumberOfPages(response.total_pages);
      }).catch((e) => {
        setError(true)
      }).finally(() =>{
        setLoading(false);
      });
    }, [page]);


    return (
            <div>
                <Nav />
                <div className=" auto flex">
                    <h1>Top Rated Movies</h1>
                    <Search list={data} />
                </div>
                <TopRatedMovie list={data}/>
                <Pagination setPage={setPage} pageNumber={500} />
                <Footer />
            </div>
        )
    }

export default Top_Rated_Movie;