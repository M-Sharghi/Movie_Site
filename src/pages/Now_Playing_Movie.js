import Nav from "../components/Nav";
import Now_Playing from "../components/NowPlayingMovie";
import Footer from "../components/Footer";
import {useState, useEffect} from "react";
import {get_now_playing_movie} from "../helpers/server";
import Pagination from "../components/Pagination";


function Now_Playing_Movie(){
    let [data, setData] = useState([]);
    let [page, setPage]=useState();
    let [numberOfPages, setNumberOfPages]=useState();
    let [loading,setLoading]=useState(false);

    useEffect(() => {
        setLoading(true);
        get_now_playing_movie(page).then((response) => {
        setData(response.results);
        setNumberOfPages(response.total_pages);
        setLoading(false);
      });
    }, [page]);


    return (
            <div>
                <Nav />
                <Now_Playing list={data}/>
                <Pagination setPage={setPage} pageNumber={numberOfPages} />
                <Footer />
            </div>
        )
    }

export default Now_Playing_Movie;