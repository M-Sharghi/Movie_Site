import { Link } from "react-router-dom";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Upcoming(props) {
  return (
    <div className="flex auto">
      {props.list.map((item, page) => {
        let img_url = "https://www.themoviedb.org/t/p/w220_and_h330_face/";
        let img_upcoming_movie = `${img_url}${item.poster_path}`;
        return (
          <div>
            <div className="Pages_Picflex" key={item.id}>
              <Link to={`/movie/${item.id}`}>
                <img className="Pages_Image" src={img_upcoming_movie}></img>
              </Link>
              <div className="Pages_Chart">
                <CircularProgressbar
                  background={true}
                  styles={{
                    path: { stroke: "yellow" },
                    trail: { stroke: "grey" },
                    text: { fill: "white", fontSize: "24px" },
                    background: { fill: "#232328" },
                  }}
                  value={Math.round(item.vote_average * 10)}
                  text={`${Math.round(item.vote_average * 10)}%`}
                />
              </div>
            </div>
            <br />
            <Link to={`/movie/${item.id}`}>
              <div className="Pages_Title">{item.title}</div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Upcoming;
