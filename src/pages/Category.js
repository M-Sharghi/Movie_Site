import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { get_movie_genre, get_tv_shows_genre } from "../helpers/server";
import { Link } from "react-router-dom";

/* Filter movie or TV show category for aceess genres */
function filter_movie(movie) {
  return movie.filter((item) => {
    return item.name;
  });
}

function filter_tv(tv) {
  return tv.filter((item) => {
    return item.name;
  });
}

function Category() {
  let [selected, setSelected] = useState("movie");
  let [movie, setMovie] = useState([]);
  let [tv, setTV] = useState([]);
  let [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    get_movie_genre().then((response) => {
      setMovie(response.genres);
      setLoading(false);
    });

    get_tv_shows_genre().then((response) => {
      setTV(response.genres);
      setLoading(false);
    });
  }, []);

  let filter_choice =
    selected === "movie" ? filter_movie(movie) : filter_tv(tv);
  let movie_css = selected === "movie" ? "btn_show" : "";
  let tv_css = selected === "tv" ? "btn_show" : "";
  let choice = filter_choice.map((item) => {
    return (
        <div className="category_genres">
          <Link to={`/genres/${selected}/${item.name}/${item.id}`}>{item.name}</Link>
        </div>
    );
  });

  return (
    <div>
      <Nav />
      <div>
        <button className="auto flex category_filter">
          <a className={movie_css}
            style={{ cursor: "pointer" }}
            onClick={() => {
              setSelected("movie");
            }}
          >
            Movie
          </a>
          <a
            className={tv_css}
            style={{ cursor: "pointer" }}
            onClick={() => {
              setSelected("tv");
            }}
          >
            TV Shows
          </a>
        </button>
        <hr />
        <div className="auto flex margin">{choice}</div>
      </div>
      <Footer />
    </div>
  );
}

export default Category;
