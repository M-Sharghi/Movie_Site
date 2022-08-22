function PersonBio(props) {
  let biography =
    props.list.biography !== ""
      ? props.list.biography
      : "There isn't any biography !";
  let img_profile = "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/";
  let img_people = `${img_profile}${props.list.profile_path}`;
  let gender =
    `${props.list.gender}` == 1 ? "Female" : "Male"; /* check gender*/
  let woman_img = "/icons/woman.jpg";
  let man_img = "/icons/man.jpg";
  let gender_img =
    `${props.list.gender}` == 1
      ? `${woman_img}`
      : `${man_img}`; /* check img gender*/
  let img_is_null =
    `${props.list.profile_path}` !== "null"
      ? `${img_people}`
      : `${gender_img}`; /* check if img is null*/
  return (
    <div className="flex auto">
      <div key={props.list.id}>
        <span>
          <img className="image_bio" src={img_is_null} />
        </span>
        <br />
        <br />
      </div>
      <div className="text_bio">
        <h2>{props.list.name}</h2>
        <h3 style={{ color: "#A52A2A" }}>
          <i>Personal Info:</i>
        </h3>
        <h4>Known For : {props.list.known_for_department}</h4>
        <h4>Gender : {gender}</h4>
        <h4>Birthday : {props.list.birthday}</h4>
        <h4>Place of Birth : {props.list.place_of_birth}</h4>
      </div>
      <div className="biography">
        <h2>
          <i>Biography</i>
        </h2>
        <p>{biography}</p>
      </div>
      <h2 className="h2_bio">Acting Information</h2>
      <div className="act_container_bio">
        <div className="flex table_bio">
          <span className="first_col_bio">
            <h3>Release date</h3>
          </span>
          <span className="cols_bio">
            <h3>Title</h3>
          </span>
          <span className="cols_bio">
            <h3>Character</h3>
          </span>
        </div>
        {props.act.map((item) => {
          let release_date =
            `${item.release_date}` == "" ? " " : `${item.release_date}`;
          let character = `${item.character}` == "" ? " " : `${item.character}`;
          return (
            <div className="flex table_bio" key={item.id}>
              <span className="first_col_bio">{release_date}</span>
              <span className="cols_bio">{item.title}</span>
              <span className="cols_bio">{character}</span>
            </div>
          );
        })}
      </div>
      <h2 className="h2_bio">Other Activity</h2>
      <div className="act_container_bio">
        <div className="flex table_bio">
          <span className="first_col_bio">
            <h3>Release date</h3>
          </span>
          <span className="cols_bio">
            <h3>Title</h3>
          </span>
          <span className="cols_bio">
            <h3>Activity</h3>
          </span>
        </div>
        {props.crew.map((item) => {
          return (
            <div className="flex table_bio" key={item.id}>
              <span className="first_col_bio">{item.release_date}</span>
              <span className="cols_bio">{item.title}</span>
              <span className="cols_bio">{item.department}</span>
            </div>
          );
        })}
      </div>
      <div>
        <h2 className="flex h2_bio">Images</h2>
        <div>
          {props.image.map((item) => {
            let images = "https://www.themoviedb.org/t/p/w220_and_h330_face/";
            let images_people = `${images}${item.file_path}`;
            return (
              <span key={item.id}>
                <img
                  src={images_people}
                  style={{ width: 138, height: "175px" }}
                />
              </span>
            );
          })}
        </div>
        <br />
      </div>
    </div>
  );
}

export default PersonBio;
