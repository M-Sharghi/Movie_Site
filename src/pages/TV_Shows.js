import Nav from "../components/Nav";
import TVShows from "../components/TVShows";
import Footer from "../components/Footer";
import {useState, useEffect} from "react";
import {get_popular_tv_shows} from "../helpers/server";
import Pagination from "../components/Pagination";
import Search from "../components/TVSearch";


function TV_Shows(){
    let [data, setData] = useState([]);
    let [page, setPage]=useState();
    let [numberOfPages, setNumberOfPages]=useState();
    let [loading,setLoading]=useState(true);
    let [error,setError]=useState(false);

    useEffect(() => {
        setLoading(true);
        get_popular_tv_shows(page).then((response) => {
            setData(response.results);
            setNumberOfPages(response.total_pages);
        }).catch((e) => {
            setError(true)
        }).finally(() =>{
            setLoading(false);
        });
    }, [page]);


    return (
            <div>
                <Nav />
                <div className=" auto flex">
                    <h1>Popular TV Shows</h1>
                    <Search list={data} />
                </div>
                <TVShows list={data}/>
                <Pagination setPage={setPage} pageNumber={500} />
                <Footer />
            </div>
        )
    }

export default TV_Shows;