import { People_name, Pic_flex, Image, Mob_Pic_flex, Mob_Image, Mob_People_name} from "./styles";
import {Link} from "react-router-dom";


function Peoples(props){
    return (
        <div>
            <div className="flex auto">
            {props.list.map((item) => {
                let img_url="https://www.themoviedb.org/t/p/w235_and_h235_face/";
                let img_people=`${img_url}${item.profile_path}`;
                let woman_img="/icons/woman.jpg";
                let man_img="/icons/man.jpg";
                let gender_img=`${item.gender}`==1 ? `${woman_img}` : `${man_img}` ; /* check img gender*/
                let img_is_null=`${item.profile_path}`!== "null" ? `${img_people}` : `${gender_img}` ; /* check if img is null*/
                if (window.innerWidth > 480) {
                return (
                    <Pic_flex key={item.id}>
                        <Link to={`/people/${item.id}`}><Image src={img_is_null} ></Image></Link>
                        <Link to={`/people/${item.id}`}><People_name>{item.name}</People_name></Link>
                    </Pic_flex>
                )}else if (window.innerWidth <= 480) {
                    return (
                        <Mob_Pic_flex key={item.id}>
                            <Link to={`/people/${item.id}`}><Mob_Image src={img_is_null} ></Mob_Image></Link>
                            <Link to={`/people/${item.id}`}><Mob_People_name>{item.name}</Mob_People_name></Link>
                        </Mob_Pic_flex>
                        )
                    }
                })}
            </div>
        </div>
    );
}

export default Peoples;

