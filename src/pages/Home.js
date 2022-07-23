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
        <img src="./icons/movie_img.jpg"  alt="home_img"  height="700px" width="100%" /><h1 className="auto welcome">Welcome.
            Millions of movies, TV shows and people to discover.</h1>
        <Footer />
      </div>
    );
  }
  
  export default Home;