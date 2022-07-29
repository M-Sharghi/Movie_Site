import { TVShows_name, Pic_flex, Image} from "./styles";
import {Link} from "react-router-dom";

function Airing_Today(props){
    return (
        <div><h1>TV Shows Airing Today</h1>
            <div className="flex auto">
            {props.list.map((item) => {
                let img_url="https://www.themoviedb.org/t/p/w220_and_h330_face/";
                let img_airing_today_tv=`${img_url}${item.poster_path}`;
              return (
                <Pic_flex key={item.id}>
                    <Link to={`/tv/${item.id}`}><Image src={img_airing_today_tv}></Image></Link>
                    <Link to={`/tv/${item.id}`}><TVShows_name>{item.name}</TVShows_name></Link>
                </Pic_flex>   
                );
            })}
            </div>
        </div>
    )
}

export default Airing_Today;