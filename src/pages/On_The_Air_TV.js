import Nav from "../components/Nav";
import OnTheAirTV from "../components/OnTheAirTV";
import Footer from "../components/Footer";
import {useState, useEffect} from "react";
import {get_on_the_air_tv} from "../helpers/server";

function On_The_Air_TV(){
    let [data, setData] = useState([]);
    let [loading,setLoading]=useState(false);

    useEffect(() => {
        setLoading(true);
        get_on_the_air_tv().then((response) => {
        setData(response);
        setLoading(false);
      });
    }, []);


    return (
            <div>
                <Nav />
                <OnTheAirTV list={data}/>
                <Footer />
            </div>
        )
    }

export default On_The_Air_TV;