import Nav from "../components/Nav";
import Footer from "../components/Footer";
import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import {get_people, get_person_bio, get_person_images, get_person_credits} from "../helpers/server";
import PersonBio from "../components/PersonBio";


function People(){
    let { id } = useParams();
    let [data, setData] = useState([]);
    let [page, setPage]=useState();
    let [bio, setBio]=useState({});
    let [images, setImages]=useState([]);
    let [acting, setActing]=useState([]);
    let [production, setProduction]=useState([]);
    let [loading,setLoading]=useState(false);
  
    useEffect(() => {
        // setLoading(true);
        get_people().then((response) => {
            setData(response.results);
            // setLoading(false);
        });
      
        get_person_bio(id).then((response) => {
            setBio(response);
        });

        get_person_images(id).then((response) => {
            setImages(response.profiles);
        });

        get_person_credits(id).then((response) => {
            setActing(response.cast);
            setProduction(response.crew);
        });
    }, []);


    return (
        <div>
            <Nav />
            <PersonBio list={bio} image={images} act={acting} production={production}/>
            <Footer />
        </div>
    )
}

export default People;