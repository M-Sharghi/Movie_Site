import Nav from "../components/Nav";
import Movies from "../components/Movies";
import Footer from "../components/Footer";
import {useState, useEffect} from "react";
import {get_popular_movie} from "../helpers/server";

function Movie(){
    let [data, setData] = useState([]);
    let [loading,setLoading]=useState(false);

    useEffect(() => {
        setLoading(true);
        get_popular_movie().then((response) => {
        setData(response);
        setLoading(false);
      });
    }, []);


    return (
            <div>
                <Nav />
                <Movies list={data}/>
                <Footer />
            </div>
        )
    }

export default Movie;