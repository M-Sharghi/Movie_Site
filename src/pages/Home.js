import Nav from "../components/Nav";
import Footer from "../components/Footer";
// import { useEffect, useState } from "react";
import {get_people} from "../helpers/server";


function Home() {
    // let [data, setData] = useState([]);
  
    // useEffect(() => {
    //   get_coins().then((response) => {
    //     setData(response);
    //   });
    // }, []);
  
    return (
      <div>
        <Nav />
        <img src="./icons/movie_img.jpg"  alt="home_img"  height="600px" width="100%" style={{ maxWidth:"100%"}}/>
        <h1 className="auto welcome">Welcome. Millions of movies, TV shows and people to discover.</h1>
        <input type="search" placeholder="Search for ..." style={{width:"500px",  borderRadius:"48px", padding:"20px",  border:"none", fontSize:"20px"}}></input>
        <div><img src="./icons/movieLogo.jpg"  style={{width:"200px", padding:"24px"}}  /></div>
        <Footer />
      </div>
    );
  }
  
  export default Home;