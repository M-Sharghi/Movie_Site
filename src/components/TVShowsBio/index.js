import { Pic_bio, Text_flex, Image, Act_Container, First_Col, Cols, Table, H1 } from "./styles";
import { Link } from "react-router-dom";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";

function TVShowsBio(props) {
  let genres = props.list.genres;
  let img_profile = "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/";
  let img_movie = `${img_profile}${props.list.poster_path}`;
  let overview = props.list.overview !== "" ? props.list.overview : "There isn't any overview !" ;
  return (
    <div className="flex auto">
      <Pic_bio key={props.list.id}>
        <span>
          <Image src={img_movie}></Image>
        </span>
      </Pic_bio>
      <Text_flex>
        <h1>{props.list.name}</h1>
        <span style={{ width: 80 }}>
          <CircularProgressbar
            styles={{
              path: { stroke: "#cbd842" },
              trail: { stroke: "grey" },
              text: { fill: "white", fontSize: "24px" },
            }}
            value={Math.round(props.list.vote_average * 10)}
            text={`${Math.round(props.list.vote_average * 10)}%`}
          />
        </span>
        <h4 style={{ color: "#A52A2A" }}>
          <i>{props.list.tagline}</i>
        </h4>
        <div>
          <h5>Status : {props.list.status}</h5>
          <h5>Type : {props.list.type}</h5>
          <h5>Original Language : {props.list.original_language}</h5>
          <h5>Genres: {genres.map((item)=>{
              return ( <span>{item.name} </span>);
              })}
          </h5>
        </div>
      </Text_flex>
      <div style={{ textAlign: "left", width:"100%" }}>
        <H1>
          <i>overview</i>
        </H1>
        <p>{overview}</p>
      </div>
      <ImageList
        sx={{
          width: "100%",
          height: 350,
          marginTop: "64px",
          marginBottom: "64px",
        }}
      >
        <ImageListItem key="Subheader" cols={10}>
          <ListSubheader component="div">
            <h1 style={{ textAlign: "left" }}>Series Cast</h1>
          </ListSubheader>
        </ImageListItem>
        {props.act.map((item) => {
          let images = "https://www.themoviedb.org/t/p/w138_and_h175_face/";
          let images_people = `${images}${item.profile_path}`;
          let woman_img = "/icons/woman.jpg";
          let man_img = "/icons/man.jpg";
          let gender_img =
            `${item.gender}` == 1 ? `${woman_img}` : `${man_img}`;
          let img_is_null =
            `${item.profile_path}` !== "null"
              ? `${images_people}`
              : `${gender_img}`;
          return (
            <ImageListItem
              key={item.id}
              component={Link}
              to={`/people/${item.id}`}
            >
              <img
                src={`${img_is_null}?w=248&fit=crop&auto=format`}
                srcSet={`${img_is_null}?w=248&fit=crop&auto=format&dpr=4 2x`}
                alt={item.name}
                loading="lazy"
                style={{ width: 138, height: 175 }}
              />
              <ImageListItemBar
                title={item.name}
                subtitle={<span>Character: {item.character}</span>}
                position="below"
                sx={{ width: 138, height: 175 }}
              />
            </ImageListItem>
          );
        })}
      </ImageList>
      <H1>Crew Details</H1>
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

export default TVShowsBio;
