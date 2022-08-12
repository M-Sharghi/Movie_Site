import Nav from "../components/NavHome";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
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
            width: "650px",
            borderRadius: "48px",
            padding: "24px",
            border: "none",
            fontSize: "20px",
          }}
        ></input><br />
        <div className="auto" style={{width:'700px', textAlign:"left", padding:"16px 32px", borderRadius:16}}>
        {props.list.slice(0, 8).map((item)=>{
          let img_url="https://www.themoviedb.org/t/p/w94_and_h141_bestv2";
          let img_people=`${img_url}${item.profile_path || item.poster_path}`;
          let woman_img="/icons/woman.jpg";
          let man_img="/icons/man.jpg";
          let gender_img=`${item.gender}`==1 ? `${woman_img}` : `${man_img}` ; 
          let img_is_null=`${item.profile_path || item.poster_path}`!== "null" ? `${img_people}` : `${gender_img}` ;
          if(item.media_type==="person"){
            return(<div><Link  to={`/people/${item.id}`} key={item.id}><img src={img_is_null} width="48px" height="48px" style={{margin:"0.5px 16px", borderRadius:4}}/>{item.name}</Link></div>);
            } 
          else if(item.media_type==="movie"){
            return(<div><Link  to={`/movie/${item.id}`} key={item.id}><img src={img_is_null} width="48px" height="48px" style={{margin:"0.5px 16px", borderRadius:4}}/>{item.title}</Link></div>);
            }
          else if(item.media_type==="tv"){
            return(<div><Link  to={`/tv/${item.id}`} key={item.id}><img src={img_is_null} width="48px" height="48px" style={{margin:"0.5px 16px", borderRadius:4}}/>{item.name}</Link></div>);
          }
        })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
