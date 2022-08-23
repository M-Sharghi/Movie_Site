import { Link } from "react-router-dom";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import numbro from "numbro";


function MovieBio(props) {
  let genres = props.list.genres;
  let img_profile = "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/";
  let img_movie = `${img_profile}${props.list.poster_path}`;
  let overview =
    props.list.overview !== ""
      ? props.list.overview
      : "There isn't any overview !";
  return (
    <div className="flex auto">
      <div key={props.list.id}>
        <span>
          <img className="image_bio" src={img_movie} />
        </span>
      </div>
      <div className="text_bio">
        <h2>{props.list.title}</h2>
        <span className="chart_bio">
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
          <h5>Budget : {numbro(props.list.budget).formatCurrency({thousandSeparated: true, mantissa: 2})}</h5>
          <h5>Revenue : {numbro(props.list.revenue).formatCurrency({thousandSeparated: true, mantissa: 2})}</h5>
          <h5>
            Genres:{" "}
            {genres.map((item) => {
              return <span>{item.name} </span>;
            })}
          </h5>
        </div>
      </div>
      <div className="biography"
      // style={{ textAlign: "left", width: "100%" }}
      >
        <h2>
          <i>overview</i>
        </h2>
        <p>{overview}</p>
      </div>
      <ImageList
        sx={{
          width: "100%",
          height: 350,
          marginTop: "64px",
          marginBottom: "64px",
          border: "1px solid white",
        }}
      >
        <ImageListItem key="Subheader" cols={10}>
          <ListSubheader component="div">
            <h2 style={{ textAlign: "left" }}>Top Billed Cast</h2>
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
                src={`${img_is_null}`}
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
      <h2 className="h2_bio">Crew Details</h2>
      <div className="act_container_bio">
        <div className="flex table_bio">
          <span className="first_col_bio">
            <h3>Department</h3>
          </span>
          <span className="cols_bio">
            <h3>Name</h3>
          </span>
          <span className="cols_bio">
            <h3>Job</h3>
          </span>
        </div>
        {props.crew.map((item) => {
          return (
            <div className="flex table_bio">
              <span className="first_col_bio">{item.department}</span>
              <span className="cols_bio">{item.name}</span>
              <span className="cols_bio">{item.job}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MovieBio;
