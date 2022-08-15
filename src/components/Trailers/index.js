import { useState } from "react";
import ReactPlayer from "react-player";
import { get_movie_trailer, get_movie_search } from "../../helpers/server";

async function search_trailer(input) {
  const response = await get_movie_search(input);
  const ids = response.results
    .map((item) => {
      return item.id;
    })
    .slice(0, 1);
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
      {list.map((key) => {
          return (
            <ReactPlayer
              url={`https://youtu.be/${key}`}
              controls={true}
              // playing={true}
            />
          );
        }
      )}
    </div>
  );
}

export default App;
