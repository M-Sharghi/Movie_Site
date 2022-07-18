import Nav from "../components/Nav";
import TopRatedMovie from "../components/TopRatedMovie";
import Footer from "../components/Footer";
import {useState, useEffect} from "react";
import {get_top_rated_movie} from "../helpers/server";

function Top_Rated_Movie(){
    let [data, setData] = useState([]);
    let [loading,setLoading]=useState(false);

    useEffect(() => {
        setLoading(true);
        get_top_rated_movie().then((response) => {
        setData(response);
        setLoading(false);
      });
    }, []);


    return (
            <div>
                <Nav />
                <TopRatedMovie list={data}/>
                <Footer />
            </div>
        )
    }

export default Top_Rated_Movie;