
import { useState } from "react";
import ReactPlayer from "react-player";
import { get_movie_trailer, get_movie_search } from "../helpers/server"

function App() {
  const [input, setInput] = useState("inception");
  const [id, setId] = useState([]);
  const [key, setKey] = useState([]);
  const [videoURL, setVideoURL] = useState("https://youtu.be/4_hAjH8hK4U");


  function handleSearch() {
    get_movie_search(input).then((response) => {
        {response.results.map((item)=>{
          setId(item.id);
          // console.log(item.id);
          console.log(id);
        })}
    });

    get_movie_trailer(id).then((response) => {
      {response.results.map((item)=>{
        setKey(item.key);
      })}
      setVideoURL(`https://youtu.be/${key}`)
    });  
  }

  return (
    <div className="trailer">
      <div className="search-box">
        <h3> Any Movies Trailer: </h3>
        <input
          type="text"
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />

        <button
          onClick={() => {
            handleSearch();
          }}
        >
          Search
        </button>
      </div>
      <ReactPlayer
        url={videoURL}
        controls={true}
        // playing={true}
      />
    </div>
  );
}

export default App;
