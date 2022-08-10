import Nav from "../components/Nav";
import Footer from "../components/Footer";
import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { get_tv_shows_bio, get_tv_shows_credits, get_movie_recommendations} from "../helpers/server";
import TVShowsBio from "../components/TVShowsBio";


function TV_Shows_Bio(){
    let { id } = useParams();
    let [bio, setBio]=useState({});
    let [seasons, setSeasons]=useState([]);
    let [acting, setActing]=useState([]);
    let [production, setProduction]=useState([]);
    let [recommendations, setRecommendations]=useState([]);
    let [loading,setLoading]=useState(false);
  
    
    useEffect(() => {
        // setLoading(true);
        get_tv_shows_bio(id).then((response) => {
            setBio(response);
            setSeasons(response.seasons)

        });

        get_tv_shows_credits(id).then((response) => {
            setActing(response.cast);
            setProduction(response.crew);
        });

        get_movie_recommendations(id).then((response) => {
            setRecommendations(response.results);
            // setLoading(false);
        });
    }, []);


    return (
        <div>
            <Nav />
            <TVShowsBio list={bio} season={seasons} act={acting} crew={production} recommendation={recommendations}/>
            <Footer />
        </div>
    )
}

export default TV_Shows_Bio;