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
                return (
                    <div className="Pic_flex" key={item.id}>
                        <Link to={`/people/${item.id}`}><img className="Image" src={img_is_null} /></Link>
                        <Link to={`/people/${item.id}`}><div className="People_name">{item.name}</div></Link>
                    </div>
                    )
                }
            )}
            </div>
        </div>
    );
}

export default Peoples;

