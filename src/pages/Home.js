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
        {/* <CoinsList list={data} /> */}
        <Footer />
      </div>
    );
  }
  
  export default Home;