import Nav from "../components/NavHome";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { get_multi_search } from "../helpers/server";
import { Link } from "react-router-dom";


function Home() {
  let [data, setData] = useState([]);
  let [input, setInput] = useState("!");

  useEffect(() => {
    get_multi_search(input).then((response) => {
      setData(response.results);
    });
  }, [input]);

  return (
    <div>
      <Nav />
      <div className="home">
        <h1 className="auto welcome">
          Welcome. Millions of movies, TV shows and people to discover.
        </h1>
        <input
          onChange={(e)=>{setInput(e.target.value);}}
          type="search"
          placeholder="Search for ..."
          style={{
            width: "600px",
            borderRadius: "48px",
            padding: "24px",
            border: "none",
            fontSize: "20px",
          }}
        ></input><br /><br />
        {data.map((item)=>{
          if(item.media_type==="person")
            {return(<div><Link to={`/people/${item.id}`} key={item.id}>{item.name}</Link></div>);
            } 
          else if(item.media_type==="movie"){
            return(<div><Link to={`/movie/${item.id}`} key={item.id}>{item.title}</Link></div>);
            }
          else if(item.media_type==="tv"){
            return(<div><Link to={`/tv/${item.id}`} key={item.id}>{item.name}</Link></div>);
          }
        })}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
