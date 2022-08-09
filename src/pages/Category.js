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

    let filter_choice = selected === "movie" ?  filter_movie(movie) : filter_tv(tv) ;
    let movie_css = selected === "movie" ?  "btn_show" : "" ;
    let tv_css = selected === "TV Show" ?  "btn_show" : "" ;
    let choice = filter_choice.map((item)=>{
        return(
                <div style={{margin:12}}>
                    <div style={{width:300,backgroundImage: "linear-gradient(90deg,#9a6dfb -7.22%,#5dc7fc 109.17%)",margin:"auto",padding:16,borderRadius:32}}>
                        <Link to={`/genres/${item.id}`}>
                            {item.name}
                        </Link>
                    </div>
                </div>    
    )});

    return (
            <div>
                <Nav />
                <div>
                    <button className="auto flex" style={{width:450,backgroundColor:"#232328", border:"none", borderRadius: "24px", padding: "0px 32px", fontWeight: "bold", marginTop:"48px",marginBottom:"24px",fontSize:24}}>
                        <a className={movie_css} href="#" onClick={()=>{setSelected("movie")}}>Movie</a>
                        <a className={tv_css} href="#" onClick={()=>{setSelected("TV Show")}}>TV Shows</a>
                    </button><hr />
                    <div style={{marginTop:"32px"}}></div>
                    <div className="auto flex">
                        {choice}
                    </div>
                    <div style={{marginBottom:"32px"}}></div>
                </div>
                <Footer />
            </div>
        )
    }

export default Category;