import Nav from "../components/Nav";
import AiringTodayTV from "../components/AiringTodayTV";
import Footer from "../components/Footer";
import {useState, useEffect} from "react";
import {get_airing_today_tv} from "../helpers/server";

function Airing_Today_TV(){
    let [data, setData] = useState([]);
    let [loading,setLoading]=useState(false);

    useEffect(() => {
        setLoading(true);
        get_airing_today_tv().then((response) => {
        setData(response);
        setLoading(false);
      });
    }, []);


    return (
            <div>
                <Nav />
                <AiringTodayTV list={data}/>
                <Footer />
            </div>
        )
    }

export default Airing_Today_TV;