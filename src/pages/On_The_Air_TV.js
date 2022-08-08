import Nav from "../components/Nav";
import OnTheAirTV from "../components/OnTheAirTV";
import Footer from "../components/Footer";
import {useState, useEffect} from "react";
import {get_on_the_air_tv} from "../helpers/server";
import Pagination from "../components/Pagination";
import Search from "../components/TVSearch";


function On_The_Air_TV(){
    let [data, setData] = useState([]);
    let [page, setPage]=useState();
    let [numberOfPages, setNumberOfPages]=useState();
    let [loading,setLoading]=useState(false);

    useEffect(() => {
        setLoading(true);
        get_on_the_air_tv(page).then((response) => {
        setData(response.results);
        setNumberOfPages(response.total_pages);
        setLoading(false);
      });
    }, [page]);


    return (
            <div>
                <Nav />
                <div className=" auto flex">
                    <h1>Currently Airing TV Shows</h1>
                    <Search list={data} />
                </div>
                <OnTheAirTV list={data}/>
                <Pagination setPage={setPage} pageNumber={numberOfPages} />
                <Footer />
            </div>
        )
    }

export default On_The_Air_TV;