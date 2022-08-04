import Nav from "../components/Nav";
import Footer from "../components/Footer";
import {useState, useEffect} from "react";
import {get_multi_search} from "../helpers/server";
import Pagination from "../components/Pagination";
import Searches from "../components/Searches";


function Search(){
    let [data, setData] = useState([]);
    let [page, setPage]=useState();
    // let [query, setQuery]=useState([]);
    let [numberOfPages, setNumberOfPages]=useState();
    let [loading,setLoading]=useState(false);
  
    useEffect(() => {
        setLoading(true);
        get_multi_search(page).then((response) => {
        setData(response.results);
        setNumberOfPages(response.total_pages);
        setLoading(false);
      });
    }, [page]);

    return (
        <div>
            <Nav />
            <h1>Search</h1>
            {/* <Searches list={data} /> */}
            <Pagination setPage={setPage} pageNumber={numberOfPages} />                      
            <Footer />
        </div>
    )
}

export default Search;