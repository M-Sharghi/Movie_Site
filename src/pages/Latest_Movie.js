import Nav from "../components/Nav";
import LatestMovie from "../components/LatestMovie";
import Footer from "../components/Footer";
import {useState, useEffect} from "react";
import {get_latest_movie} from "../helpers/server";

function Latest_Movie(){
    let [data, setData] = useState({});
    let [loading,setLoading]=useState(false);

    useEffect(() => {
        setLoading(true);
        get_latest_movie().then((response) => {
        setData(response);
        // console.log(response);
        setLoading(false);
      });
    }, []);


    return (
            <div>
                <Nav />
                <LatestMovie title={data.title} img={data.poster_path} />
                <Footer />
            </div>
        )
    }

export default Latest_Movie;