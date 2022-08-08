import { TVShows_name, Pic_flex, Image} from "./styles";
import {Link} from "react-router-dom";

function On_The_Air(props){
    return (
            <div className="flex auto">
            {props.list.map((item) => {
                let img_url="https://www.themoviedb.org/t/p/w220_and_h330_face/";
                let img_on_the_air_tv=`${img_url}${item.poster_path}`;
              return (
                <Pic_flex key={item.id}>
                    <Link to={`/tv/${item.id}`}><Image src={img_on_the_air_tv}></Image></Link>
                    <Link to={`/tv/${item.id}`}><TVShows_name>{item.name}</TVShows_name></Link>
                </Pic_flex>   
                );
            })}
            </div>
    )
}

export default On_The_Air;