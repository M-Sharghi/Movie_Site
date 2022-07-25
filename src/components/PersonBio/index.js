import { Pic_flex, Text_flex, Image} from "./styles";


function PersonBio(props){
    let img_profile="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/";
    let img_people=`${img_profile}${props.list.profile_path}`;
    let gender=`${props.list.gender}`==1 ? "Female" : "Male" ;
    return (
            <div className="flex auto">
                <Pic_flex key={props.list.id}>
                    <span><Image src={img_people}></Image></span><br /><br />
                    <h2>Personal Info</h2>
                    <h4>Known For : {props.list.known_for_department}</h4>
                    <h4>Gender : {gender}</h4>
                    <h4>Birthday : {props.list.birthday}</h4>
                    <h4>Place of Birth : {props.list.place_of_birth}</h4>
                </Pic_flex>
                <Text_flex>
                    <h1>{props.list.name}</h1>
                    <h3>Biography</h3>
                    <p style={{color:"#fff"}}>{props.list.biography}</p>
                </Text_flex>
                <div>
                    <h1>Acting</h1>
                    {props.act.map((item) => {
                        return (
                            <div>
                                <div>{item.release_date} &bull; {item.title}</div>
                            </div>   
                        );
                    })}
                </div>
                <div>
                    {props.production.map((item) => {
                        // <h1>{item.department}</h1>
                        return (
                            <div>
                                <div>{item.release_date} &bull; {item.title}</div>
                            </div>  
                        );
                    })}
                </div>
                <div>
                    <h1>Images</h1>
                    {props.image.map((item) => {
                        let images="https://www.themoviedb.org/t/p/w220_and_h330_face/";
                        let images_people=`${images}${item.file_path}`;
                        return (
                            <span>
                                <img src={images_people} />
                            </span>   
                        );
                    })}
                </div>
            </div>
    );
}

export default PersonBio;

