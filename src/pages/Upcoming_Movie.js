import Nav from "../components/Nav";
import UpcomingMovie from "../components/UpcomingMovie";
import Footer from "../components/Footer";
import {useState, useEffect} from "react";
import {get_upcoming_movie} from "../helpers/server";

function Upcoming_Movie(){
    let [data, setData] = useState([]);
    let [loading,setLoading]=useState(false);

    useEffect(() => {
        setLoading(true);
        get_upcoming_movie().then((response) => {
        setData(response);
        setLoading(false);
      });
    }, []);


    return (
            <div>
                <Nav />
                <UpcomingMovie list={data}/>
                <Footer />
            </div>
        )
    }

export default Upcoming_Movie;