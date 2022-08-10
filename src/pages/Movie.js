import Nav from "../components/Nav";
import Movies from "../components/Movies";
import Footer from "../components/Footer";
import {useState, useEffect} from "react";
import {get_popular_movie} from "../helpers/server";
import Pagination from "../components/Pagination";
import Search from "../components/MovieSearch";


function Movie(){
    let [data, setData] = useState([]);
    let [page, setPage]=useState();
    let [numberOfPages, setNumberOfPages]=useState();
    let [loading,setLoading]=useState(false);

    useEffect(() => {
        setLoading(true);
        get_popular_movie(page).then((response) => {
        setData(response.results);
        setNumberOfPages(response.total_pages);
        setLoading(false);
      });
    }, [page]);


    return (
            <div>
                <Nav />
                <div className="auto flex">
                    <h1>Popular Movies</h1>
                    <Search list={data} />
                </div>
                <Movies list={data}/>
                <Pagination setPage={setPage} pageNumber={500} />
                <Footer />
            </div>
        )
    }

export default Movie;