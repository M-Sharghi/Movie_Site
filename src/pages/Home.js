import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import {get_multi_search} from "../helpers/server";
import MultiSearch from "../components/MultiSearch";


function Home(){

  let [myOptions, setMyOptions] = useState([])
  console.log(myOptions);
  
    useEffect(() => {
      get_multi_search(myOptions).then((response) => {
      for (var i = 0; i < response.results.length; i++) {
        myOptions.push(response.results[i].title)
      }
      setMyOptions(myOptions)
    });
  }, []);

  
    return (
      <div>
        <Nav />
        <img className="home" />
        <h1 className="auto welcome">Welcome. Millions of movies, TV shows and people to discover.</h1>
        <input type="search" placeholder="Search for ..." style={{width:"500px",  borderRadius:"48px", padding:"20px",  border:"none", fontSize:"20px"}}></input>
        <div><img src="./icons/movieLogo.jpg"  style={{width:"200px", padding:"24px"}}  /></div>
        <MultiSearch data={myOptions} func={get_multi_search}/><br /><br />
        <Footer />
      </div>
    );
  }

  
  export default Home;
