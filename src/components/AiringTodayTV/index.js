import { Link } from "react-router-dom";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Airing_Today(props) {
  return (
    <div className="flex auto">
      {props.list.map((item) => {
        let img_url = "https://www.themoviedb.org/t/p/w220_and_h330_face/";
        let img_airing_today_tv = `${img_url}${item.poster_path}`;
        return (
          <div key={item.id}>
            <div className="Pages_Picflex" key={item.id}>
              <Link to={`/tv/${item.id}`}>
                <img className="Pages_Image" src={img_airing_today_tv}></img>
              </Link>
              <div className="Pages_Chart">
                <CircularProgressbar
                  background={true}
                  styles={{
                    path: { stroke: "#cbd842" },
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
            <Link to={`/tv/${item.id}`}>
              <div className="Pages_Title">{item.name}</div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Airing_Today;
