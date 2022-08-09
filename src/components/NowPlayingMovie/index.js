import { Movie_name, Pic_flex, Image} from "./styles";
import {Link} from "react-router-dom";

function Now_Playing(props){
    return (
            <div className="flex auto">
            {props.list.map((item) => {
                let img_url="https://www.themoviedb.org/t/p/w220_and_h330_face/";
                let img_now_playin_movie=`${img_url}${item.poster_path}`;
              return (
                <Pic_flex key={item.id}>
                    <Link to={`/movie/${item.id}`}><Image src={img_now_playin_movie}></Image></Link>
                    <Link to={`/movie/${item.id}`}><Movie_name>{item.title}</Movie_name></Link>
                </Pic_flex>   
                );
            })}
            </div>
    )
}

export default Now_Playing;