import {
  Pic_flex,
  Text_flex,
  Image,
  Act_Container,
  First_Col,
  Cols,
  Table,
} from "./styles";
import { Link } from "react-router-dom";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function MovieBio(props) {
  let img_profile = "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/";
  let img_movie = `${img_profile}${props.list.poster_path}`;
  return (
    <div className="flex auto">
      <Pic_flex key={props.list.id}>
        <span>
          <Image src={img_movie}></Image>
        </span>
        <h2>Movie Info</h2>
        <h4>Release Date : {props.list.release_date}</h4>
        <h4>Original Language : {props.list.original_language}</h4>
        <h4>Status : {props.list.status}</h4>
        <h4>Budget : {props.list.budget}</h4>
        <h4>Revenue : {props.list.revenue}</h4>
      </Pic_flex>
      <Text_flex>
        <h1>{props.list.title}</h1>
        <span style={{ width: 80 }}>
          <CircularProgressbar
            styles={{
              path: { stroke: "yellow" },
              trail: { stroke: "grey" },
              text: { fill: "white", fontSize: "24px" },
            }}
            value={Math.round(props.list.vote_average * 10)}
            text={`${Math.round(props.list.vote_average * 10)}%`}
          />
        </span>
        <h4>
          <i>{props.list.tagline}</i>
        </h4>
        <h3>overview</h3>
        <p>{props.list.overview}</p>
      </Text_flex>
      <h1>Top Billed Cast</h1>
      <div className="auto">
        {props.act.map((item) => {
          let images = "https://www.themoviedb.org/t/p/w138_and_h175_face/";
          let images_people = `${images}${item.profile_path}`;
          let woman_img = "/icons/woman.jpg";
          let man_img = "/icons/man.jpg";
          let gender_img =
            `${item.gender}` == 1
              ? `${woman_img}`
              : `${man_img}`; /* check img gender*/
          let img_is_null =
            `${item.profile_path}` !== "null"
              ? `${images_people}`
              : `${gender_img}`; /* check if img is null*/
          return (
            <span key={item.id}>
                <Link to={`/people/${item.id}`}>
                  <img
                    src={img_is_null}
                    style={{ width: "138px", height: "175px" }}
                  />
                </Link>
            </span>
          );
        })}
      </div>
      <h1>Crew Details</h1>
      <Act_Container>
        <Table className="flex">
          <First_Col>
            <h3>Department</h3>
          </First_Col>
          <Cols>
            <h3>Name</h3>
          </Cols>
          <Cols>
            <h3>Job</h3>
          </Cols>
        </Table>
        {props.crew.map((item) => {
          return (
            <Table className="flex">
              <First_Col>{item.department}</First_Col>
              <Cols>{item.name}</Cols>
              <Cols>{item.job}</Cols>
            </Table>
          );
        })}
      </Act_Container>
    </div>
  );
}

export default MovieBio;
