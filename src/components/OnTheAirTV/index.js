import { TVShows_name, Pic_flex, Image} from "./styles";
import {Link} from "react-router-dom";

function On_The_Air(props){
    return (
        <div><h1>Currently Airing TV Shows</h1>
            <div className="flex auto">
            {props.list.map((item) => {
                let img_url="https://www.themoviedb.org/t/p/w220_and_h330_face/";
                let img_on_the_air_tv=`${img_url}${item.poster_path}`;
              return (
                <Pic_flex key={item.id}>
                    <Link to="#"><Image src={img_on_the_air_tv}></Image></Link>
                    <Link to="#"><TVShows_name>{item.name}</TVShows_name></Link>
                </Pic_flex>   
                );
            })}
            </div>
        </div>
    )
}

export default On_The_Air;