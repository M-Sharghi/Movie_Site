import Nav from "../components/NavHome";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { get_multi_search } from "../helpers/server";
import MultiSearch from "../components/MultiSearch";

function Home() {
  let [myOptions, setMyOptions] = useState([]);
  console.log(myOptions);

  useEffect(() => {
    get_multi_search(myOptions).then((response) => {
      for (var i = 0; i < response.results.length; i++) {
        myOptions.push(response.results[i].title);
      }
      setMyOptions(myOptions);
    });
  }, []);

  return (
    <div>
      <Nav />
      <div className="home">
        <h1 className="auto welcome">
          Welcome. Millions of movies, TV shows and people to discover.
        </h1>
        <input
          type="search"
          placeholder="Search for ..."
          style={{
            width: "600px",
            borderRadius: "48px",
            padding: "24px",
            border: "none",
            fontSize: "20px",
          }}
        ></input>
        <MultiSearch data={myOptions} func={get_multi_search} />
        <br />
        <br />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
