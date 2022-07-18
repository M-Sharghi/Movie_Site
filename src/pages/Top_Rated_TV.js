import Nav from "../components/Nav";
import TopRatedTV from "../components/TopRatedTV";
import Footer from "../components/Footer";
import {useState, useEffect} from "react";
import {get_top_rated_tv} from "../helpers/server";

function Top_Rated_TV(){
    let [data, setData] = useState([]);
    let [loading,setLoading]=useState(false);

    useEffect(() => {
        setLoading(true);
        get_top_rated_tv().then((response) => {
        setData(response);
        setLoading(false);
      });
    }, []);


    return (
            <div>
                <Nav />
                <TopRatedTV list={data}/>
                <Footer />
            </div>
        )
    }

export default Top_Rated_TV;