import { useState } from "react";
import ReactPlayer from "react-player";
import movieTrailer from "movie-trailer";

function App() {
  //Setting up the initial states using
  // react hook 'useState"
  const [video, setVideo] = useState("inception");
  const [videoURL, setVideoURL] = useState("https://youtu.be/sa9l-dTv9Gk");


  //A function to fetch the required URL
  // and storing it inside the
  // videoURL state variable
  function handleSearch() {
    movieTrailer(video).then((res) => {
      setVideoURL(res);
    });
  }

  return (
    <div className="trailer">
      <div className="search-box">
        <h3> any movies / shows Trailer: </h3>
        <input
          type="text"
          onChange={(e) => {
            setVideo(e.target.value);
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
