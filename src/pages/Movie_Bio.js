import Nav from "../components/Nav";
import Footer from "../components/Footer";
import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { get_movie_bio, get_movie_credits, get_movie_recommendations} from "../helpers/server";
import MovieBio from "../components/MovieBio";


async function get_movie(id){
    let movie_bio = get_movie_bio(id);
    let movie_credit = get_movie_credits(id);
    let movie_recommendation = get_movie_recommendations(id);
    let output = await Promise.all([ movie_bio, movie_credit, movie_recommendation ]);
    return output;
}

function Movie_Bio(){
    let { id } = useParams();
    let [bio, setBio]=useState({});
    let [acting, setActing]=useState([]);
    let [production, setProduction]=useState([]);
    let [recommendations, setRecommendations]=useState([]);
    let [loading,setLoading]=useState(true);
    let [error,setError]=useState(false);


    useEffect(() => {
        setLoading(true);
        get_movie(id).then((results) =>{
            let bio = results[0];
            let credit = results[1];
            let recommendation = results[2];
            setBio(bio);
            setActing(credit.cast);
            setProduction(credit.crew);
            setRecommendations(recommendation.results);
        }).catch((e) => {
            setError(true)
          }).finally(() =>{
            setLoading(false);
          });
      
    }, []);


    return (
        <div>
            <Nav />
            { !loading && <MovieBio list={bio} act={acting} crew={production} recommendation={recommendations}/>}
            <Footer />
        </div>
    )
}

export default Movie_Bio;