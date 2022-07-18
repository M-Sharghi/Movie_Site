import { Movie_name, Pic_flex, Image} from "./styles";
import {Link} from "react-router-dom";

function Latest_Movies(props){
    let img_url="https://image.tmdb.org/t/p/w220_and_h330_face/";
    let img_latest_movie=`${img_url}${props.img}`;
    return (
        <div><h1>Latest Movies</h1>
            <div className="flex auto">
                <Pic_flex key={props.img}>
                    <Link to="#"><Image src={img_latest_movie}></Image></Link>
                    <Link to="#"><Movie_name>{props.title}</Movie_name></Link>
                </Pic_flex>   
            </div>
        </div>
    )
}

export default Latest_Movies;