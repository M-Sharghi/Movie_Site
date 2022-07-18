import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Peoples from "../components/Peoples";
import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import {get_people} from "../helpers/server";
import Paginations from "../components/Paginations";

function People(){
    let [data, setData] = useState([]);
    let [loading,setLoading]=useState(false);
    let [pages,setPages]=useState(1);
  
    useEffect(() => {
        setLoading(true);
        get_people().then((response) => {
        setData(response.results);
        setPages(response.page);
        setLoading(false);
      });
    }, [pages]);

    return (
        <div>
            <Nav />
            <Peoples list={data}  /> <br /><br />
            <Paginations page={pages} />                      
            <Footer />
        </div>
    )
}

export default People;