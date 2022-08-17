import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { get_multi_search } from "../helpers/server";
import { Link } from "react-router-dom";
import Trailers from "../components/Trailers";

function Home() {
  let [data, setData] = useState([]);
  let [input, setInput] = useState("");
  let [loading,setLoading]=useState(true);
    let [error,setError]=useState(false);

  useEffect(() => {
    setLoading(true);
    if (input !== "") {
      get_multi_search(input).then((response) => {
        setData(response.results);
      }).catch((e) => {
        setError(true)
      }).finally(() =>{
        setLoading(false);
      })
    } else {
      setData([]);
    }
  }, [input]);

  return (
    <div>
      <Nav />
      <div className="home">
        <div className="home_absolute">
          <h1 className="auto welcome">
            Welcome. Millions of movies, TV shows and people to discover.
          </h1>
          <div>
            <input
              className="home_input"
              onChange={(e) => {
                setInput(e.target.value);
              }}
              type="search"
              placeholder="Search for ..."
            ></input>
            <br />
            <div className="auto home_search">
              {data.slice(0, 5).map((item) => {
                let img_url =
                  "https://www.themoviedb.org/t/p/w94_and_h141_bestv2";
                let img_people = `${img_url}${
                  item.profile_path || item.poster_path
                }`;
                let woman_img = "/icons/woman.jpg";
                let man_img = "/icons/man.jpg";
                let gender_img =
                  `${item.gender}` == 1 ? `${woman_img}` : `${man_img}`;
                let img_is_null =
                  `${item.profile_path || item.poster_path}` !== "null"
                    ? `${img_people}`
                    : `${gender_img}`;
                if (item.media_type === "person") {
                  return (
                    <div>
                      <Link
                        className="home_search_input"
                        to={`/people/${item.id}`}
                        key={item.id}
                      >
                        <img className="home_search_img" src={img_is_null} />
                        {item.name}
                      </Link>
                    </div>
                  );
                } else if (item.media_type === "movie") {
                  return (
                    <div>
                      <Link
                        className="home_search_input"
                        to={`/movie/${item.id}`}
                        key={item.id}
                      >
                        <img className="home_search_img" src={img_is_null} />
                        {item.title}
                      </Link>
                    </div>
                  );
                } else if (item.media_type === "tv") {
                  return (
                    <div>
                      <Link
                        className="home_search_input"
                        to={`/tv/${item.id}`}
                        key={item.id}
                      >
                        <img className="home_search_img" src={img_is_null} />
                        {item.name}
                      </Link>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="trailer_bgcolor">
        <Trailers />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
