import { Pic_flex, Text_flex, Image, Act_Container, First_Col, Cols, Table } from "./styles";
import { Link } from "react-router-dom";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";

function MovieBio(props) {
  let genres = props.list.genres;
  let img_profile = "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/";
  let img_movie = `${img_profile}${props.list.poster_path}`;
  return (
    <div className="flex auto">
      <Pic_flex key={props.list.id}>
        <span>
          <Image src={img_movie}></Image>
        </span>
      </Pic_flex>
      <Text_flex>
        <h1>{props.list.title}</h1>
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
          <h5>Release Date : {props.list.release_date}</h5>
          <h5>Original Language : {props.list.original_language}</h5>
          <h5>Status : {props.list.status}</h5>
          <h5>Budget : {props.list.budget}</h5>
          <h5>Revenue : {props.list.revenue}</h5>
          {/* <h5>Genres: {genres.map((item)=>{
              return ( <span>{item.name} </span>);
              })}
            </h5> */}
        </div>
      </Text_flex>
      <div style={{ textAlign: "left" }}>
        <h2>
          <i>overview</i>
        </h2>
        <p>{props.list.overview}</p>
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
            <h1 style={{ textAlign: "left" }}>Top Billed Cast</h1>
          </ListSubheader>
        </ImageListItem>
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
