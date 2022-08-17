import Nav from "../components/Nav";
import TopRatedTV from "../components/TopRatedTV";
import Footer from "../components/Footer";
import {useState, useEffect} from "react";
import {get_top_rated_tv} from "../helpers/server";
import Pagination from "../components/Pagination";
import Search from "../components/TVSearch";


function Top_Rated_TV(){
    let [data, setData] = useState([]);
    let [page, setPage]=useState();
    let [numberOfPages, setNumberOfPages]=useState();
    let [loading,setLoading]=useState(true);
    let [error,setError]=useState(false);


    useEffect(() => {
        setLoading(true);
        get_top_rated_tv(page).then((response) => {
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
                    <h1>Top Rated TV Shows</h1>
                    <Search list={data} />
                </div>
                <TopRatedTV list={data}/>
                <Pagination setPage={setPage} pageNumber={numberOfPages} />
                <Footer />
            </div>
        )
    }

export default Top_Rated_TV;