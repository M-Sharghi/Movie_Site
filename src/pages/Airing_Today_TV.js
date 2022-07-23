import Nav from "../components/Nav";
import AiringTodayTV from "../components/AiringTodayTV";
import Footer from "../components/Footer";
import {useState, useEffect} from "react";
import {get_airing_today_tv} from "../helpers/server";
import Pagination from "../components/Pagination";


function Airing_Today_TV(){
    let [data, setData] = useState([]);
    let [page, setPage]=useState();
    let [numberOfPages, setNumberOfPages]=useState();
    let [loading,setLoading]=useState(false);

    useEffect(() => {
        setLoading(true);
        get_airing_today_tv(page).then((response) => {
        setData(response.results);
        setNumberOfPages(response.total_pages);
        setLoading(false);
      });
    }, [page]);


    return (
            <div>
                <Nav />
                <AiringTodayTV list={data}/>
                <Pagination setPage={setPage} pageNumber={numberOfPages} />                      
                <Footer />
            </div>
        )
    }

export default Airing_Today_TV;