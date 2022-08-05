import Nav from "../components/Nav";
import Footer from "../components/Footer";
import {useState, useEffect} from "react";
import {get_movie_genre, get_tv_shows_genre} from "../helpers/server";

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
    let [loading,setLoading]=useState(false);

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

    let choice = selected === "movie" ?  filter_movie(movie) : filter_tv(tv) ;
    let genres = choice.map((item)=>{
        return(
            <div>
                {item.name}
            </div>
        );
    });


    return (
            <div>
                <Nav />
                <div>
                    <button className="auto flex" style={{width:"200px", backgroundColor:"#6495ED", borderRadius: "24px", padding: "8px 16px", fontWeight: "bold", marginTop:"64px"}}>
                        <a href="#" onClick={()=>{setSelected("movie");}}>Movie</a>
                        <a href="#" onClick={()=>{setSelected("TV Show")}}>TV Shows</a>
                    </button>
                    <div>
                        <a style={{width: "100px", backgroundColor: "#6495ED", margin:"16px", borderRadius:"8px"}}>{genres}</a>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }

export default Category;