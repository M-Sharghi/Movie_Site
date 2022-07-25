import Nav from "../components/Nav";
import Footer from "../components/Footer";
import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import {get_people, get_person_bio} from "../helpers/server";
import PersonBio from "../components/PersonBio";


function People(){
    let { id } = useParams();
    let [data, setData] = useState([]);
    let [page, setPage]=useState();
    let [bio, setBio]=useState({});
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
    }, []);


    // useEffect(() => {
    //     get_coin(name).then((response) => {
    //       setData(response);
    //     });
    
    //     get_coin(name).then((res) => {
    //       setHistory(res);
    //     });
    
    //     get_chart(name).then((res) => {
    //       setChart(res);
    //     });
    
    //     get_Exchanges().then((res) => {
    //       setExchange(res);
    //     });
    
    //   }, []);


    return (
        <div>
            <Nav />
            <PersonBio list={bio}/>
            <Footer />
        </div>
    )
}

export default People;