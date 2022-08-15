import Nav from "../components/Nav";
import Footer from "../components/Footer";
import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { get_movie_bio, get_movie_credits, get_movie_recommendations} from "../helpers/server";
import MovieBio from "../components/MovieBio";


function Movie_Bio(){
    let { id } = useParams();
    let [bio, setBio]=useState({});
    let [acting, setActing]=useState([]);
    let [production, setProduction]=useState([]);
    let [recommendations, setRecommendations]=useState([]);
    let [loading,setLoading]=useState(false);
  

    useEffect(() => {
        // setLoading(true);
        get_movie_bio(id).then((response) => {
            setBio(response);
        });

        get_movie_credits(id).then((response) => {
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
            <MovieBio list={bio} act={acting} crew={production} recommendation={recommendations}/>
            <Footer />
        </div>
    )
}

export default Movie_Bio;