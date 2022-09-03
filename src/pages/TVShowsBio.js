import Nav from "../components/Nav";
import Footer from "../components/Footer";
import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { get_tv_shows_bio, get_tv_shows_credits, get_tv_recommendations} from "../helpers/server";
import TVShowsBio from "../components/TVShowsBio";


async function get_tv(id){
    let tv_bio = get_tv_shows_bio(id);
    let tv_credit = get_tv_shows_credits(id);
    let tv_recommendation = get_tv_recommendations(id);
    let output = await Promise.all([ tv_bio, tv_credit, tv_recommendation ]);
    return output;
}

function TV_Shows_Bio(){
    let { id } = useParams();
    let [bio, setBio]=useState({});
    let [seasons, setSeasons]=useState([]);
    let [acting, setActing]=useState([]);
    let [production, setProduction]=useState([]);
    let [recommendations, setRecommendations]=useState([]);
    let [loading,setLoading]=useState(true);
    let [error,setError]=useState(false);

  
    
    useEffect(() => {
        setLoading(true);
        get_tv(id).then((results) =>{
            let bio = results[0];
            let credit = results[1];
            let recommendation = results[2];
            setBio(bio);
            setSeasons(bio.seasons)
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
            { !loading && <TVShowsBio list={bio} season={seasons} act={acting} crew={production} recommendation={recommendations}/>}
            <Footer />
        </div>
    )
}

export default TV_Shows_Bio;