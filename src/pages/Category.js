import Nav from "../components/Nav";
import Footer from "../components/Footer";
import {useState, useEffect} from "react";
import {get_movie_genre, get_tv_shows_genre} from "../helpers/server";
import {Link} from "react-router-dom";

/* Filter movie or TV show category for aceess genres */
function filter_movie(movie){
    return movie.filter((item)=>{
        return item.name;
    })
}

function filter_tv(tv){
    return tv.filter((item)=>{
        return item.name;
    })
}

function Category(){
    let [selected, setSelected] = useState("movie");
    let [movie, setMovie] = useState([]);
    let [tv, setTV] = useState([]);
    let [genres, setGenres] = useState("");
    let [loading,setLoading]=useState(false);
    // console.log(genres);


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

    let filter_choice = selected === "movie" ?  filter_movie(movie) : filter_tv(tv) ;
    let movie_css = selected === "movie" ?  "btn_show" : "" ;
    let tv_css = selected === "TV Show" ?  "btn_show" : "" ;
    let choice = filter_choice.map((item)=>{
        return(
            <Link to={`/genres/${item.id}`}>
                {item.name}
            </Link>
        );
    });

    return (
            <div>
                <Nav />
                <div>
                    <button className="auto flex" style={{width:"200px", backgroundColor:"#232328", border:"none", borderRadius: "24px", padding: "0px 16px", fontWeight: "bold", marginTop:"64px"}}>
                        <a className={movie_css} href="#" onClick={()=>{setSelected("movie")}}>Movie</a>
                        <a className={tv_css} href="#" onClick={()=>{setSelected("TV Show")}}>TV Shows</a>
                    </button>
                    <div>
                        {choice}
                    </div>
                </div>
                <Footer />
            </div>
        )
    }

export default Category;