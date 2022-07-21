import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Peoples from "../components/Peoples";
import {useState, useEffect} from "react";
import {get_people} from "../helpers/server";
import Pagination from "../components/Pagination";


function People(){
    let [data, setData] = useState([]);
    let [page, setPage]=useState();
    let [numberOfPages, setNumberOfPages]=useState();
    let [loading,setLoading]=useState(false);
  
    useEffect(() => {
        setLoading(true);
        get_people(page).then((response) => {
        setData(response.results);
        setNumberOfPages(response.total_pages)
        setLoading(false);
      });
    }, [page]);

    return (
        <div>
            <Nav />
            <Peoples list={data} /> <br /><br />
            <Pagination setPage={setPage} pageNumber={numberOfPages} />                      
            <Footer />
        </div>
    )
}

export default People;