import Nav from "../components/Nav";
import Movies from "../components/Movies";
import Footer from "../components/Footer";
import {useState, useEffect} from "react";
import {get_popular_movie} from "../helpers/server";
import Pagination from "../components/Pagination";


function Movie(){
    let [data, setData] = useState([]);
    let [page, setPage]=useState();
    let [numberOfPages, setNumberOfPages]=useState();
    let [loading,setLoading]=useState(false);

    useEffect(() => {
        setLoading(true);
        get_popular_movie(page).then((response) => {
        setData(response);
        /*=============== check shavad ===============*/
        setNumberOfPages(response.total_pages)
        setLoading(false);
      });
    }, []);


    return (
            <div>
                <Nav />
                <Movies list={data}/>
                <Pagination setPage={setPage} pageNumber={numberOfPages} />
                <Footer />
            </div>
        )
    }

export default Movie;