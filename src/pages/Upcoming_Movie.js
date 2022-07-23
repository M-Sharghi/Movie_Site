import Nav from "../components/Nav";
import UpcomingMovie from "../components/UpcomingMovie";
import Footer from "../components/Footer";
import {useState, useEffect} from "react";
import {get_upcoming_movie} from "../helpers/server";
import Pagination from "../components/Pagination";


function Upcoming_Movie(){
    let [data, setData] = useState([]);
    let [page, setPage]=useState();
    let [numberOfPages, setNumberOfPages]=useState();
    let [loading,setLoading]=useState(false);

    useEffect(() => {
        setLoading(true);
        get_upcoming_movie(page).then((response) => {
        setData(response.results);
        setNumberOfPages(response.total_pages);
        setLoading(false);
      });
    }, [page]);


    return (
            <div>
                <Nav />
                <UpcomingMovie list={data}/>
                <Pagination setPage={setPage} pageNumber={numberOfPages} />
                <Footer />
            </div>
        )
    }

export default Upcoming_Movie;