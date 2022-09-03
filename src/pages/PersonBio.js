import Nav from "../components/Nav";
import Footer from "../components/Footer";
import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import {get_people, get_person_bio, get_person_images, get_person_credits} from "../helpers/server";
import PersonBio from "../components/PersonBio";


async function get_person(id){
    let person = get_people();
    let person_bio = get_person_bio(id);
    let person_image = get_person_images(id);
    let person_credit = get_person_credits(id);
    let output = await Promise.all([ person, person_bio, person_image, person_credit ]);
    return output;
}

function Person_Bio(){
    let { id } = useParams();
    let [data, setData] = useState([]);
    let [bio, setBio]=useState({});
    let [images, setImages]=useState([]);
    let [acting, setActing]=useState([]);
    let [production, setProduction]=useState([]);
    let [loading,setLoading]=useState(true);
    let [error,setError]=useState(false);

  
    useEffect(() => {
        setLoading(true);
        get_person(id).then((results) =>{
            let person = results[0];
            let bio = results[1];
            let image = results[2];
            let credit = results[3];
            setData(person.results);
            setBio(bio);
            setImages(image.profiles)
            setActing(credit.cast);
            setProduction(credit.crew);
        }).catch((e) => {
            setError(true)
          }).finally(() =>{
            setLoading(false);
          });

    }, []);


    return (
        <div>
            <Nav />
            { !loading && <PersonBio data={data} list={bio} image={images} act={acting} crew={production}/>}
            <Footer />
        </div>
    )
}

export default Person_Bio;