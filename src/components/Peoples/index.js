import { People_name, Pic_flex, Image} from "./styles";
import {Link} from "react-router-dom";


function Peoples(props){
    return (
        <div><h1>Popular People</h1>
            <div className="flex auto">
            {props.list.map((item) => {
                let img_url="https://www.themoviedb.org/t/p/w235_and_h235_face/";
                let img_people=`${img_url}${item.profile_path}`;
              return (
                    <Pic_flex key={item.id}>
                        <Link to="#"><Image src={img_people} ></Image></Link>
                        <Link to="#"><People_name>{item.name}</People_name></Link>
                    </Pic_flex>
                );
            })}
            </div>
        </div>
    );
}

export default Peoples;

