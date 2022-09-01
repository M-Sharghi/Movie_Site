import { useState } from "react";
import ReactPlayer from "react-player";
import { get_movie_trailer, get_movie_search } from "../../helpers/server";

async function search_trailer(input) {
  const response = await get_movie_search(input);
  const ids = response.results.map((item) => {
      return item.id;
    }).slice(0, 1);
  const trailers_promises = ids.map((id) => {
    return get_movie_trailer(id);
  });
  const trailers = await Promise.all(trailers_promises);
  const output = [];
  trailers.forEach((movie) => {
    movie.results.forEach((item) => {
      output.push(item.key);
    });
  });
  return output.slice(0, 1);
}

function App() {
  const [input, setInput] = useState("inception");
  const [list, setList] = useState([]);


  function handleSearch() {
    search_trailer(input).then((keys) => {
      setList(keys);
    })
  } 

  return (
    <div className="trailer auto">
      <div className="search-box">
        <h2> Search your movie trailer</h2>
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
      {list.map((key) => {
        /* Responsive Player */
        if(window.innerWidth >480){
          return (
            <ReactPlayer
              key={key}
              url={`https://youtu.be/${key}`}
              controls={true}
              light="/icons/h_p.jpg"
              playing={true}
            />
          )} else if(window.innerWidth <=480){
            return (
              <ReactPlayer
                key={key}
                url={`https://youtu.be/${key}`}
                controls={true}
                light="/icons/h_p.jpg"
                playing={true}
                width={400}
              />
            )
          }
        }
      )}
    </div>
  );
}

export default App;
