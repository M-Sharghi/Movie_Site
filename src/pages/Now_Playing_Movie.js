import Nav from "../components/Nav";
import Now_Playing from "../components/NowPlayingMovie";
import Footer from "../components/Footer";
import {useState, useEffect} from "react";
import {get_now_playing_movie} from "../helpers/server";

function Now_Playing_Movie(){
    let [data, setData] = useState([]);
    let [loading,setLoading]=useState(false);

    useEffect(() => {
        setLoading(true);
        get_now_playing_movie().then((response) => {
        setData(response);
        setLoading(false);
      });
    }, []);


    return (
            <div>
                <Nav />
                <Now_Playing list={data}/>
                <Footer />
            </div>
        )
    }

export default Now_Playing_Movie;