import Nav from "../components/Nav";
import TVShows from "../components/TVShows";
import Footer from "../components/Footer";
import {useState, useEffect} from "react";
import {get_popular_tv_shows} from "../helpers/server";

function TV_Shows(){
    let [data, setData] = useState([]);
    let [loading,setLoading]=useState(false);

    useEffect(() => {
        setLoading(true);
        get_popular_tv_shows().then((response) => {
        setData(response);
        setLoading(false);
      });
    }, []);


    return (
            <div>
                <Nav />
                <TVShows list={data}/>
                <Footer />
            </div>
        )
    }

export default TV_Shows;