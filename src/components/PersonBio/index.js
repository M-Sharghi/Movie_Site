import { Pic_flex, Text_flex, Image, Act_Container, First_Col, Cols, Table } from "./styles";

function PersonBio(props) {
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
      <Pic_flex key={props.list.id}>
        <span>
          <Image src={img_is_null}></Image>
        </span>
        <br />
        <br />
      </Pic_flex>
      <Text_flex>
        <h1>{props.list.name}</h1>
        <h3 style={{ color: "#A52A2A" }}>
          <i>Personal Info:</i>
        </h3>
        <h4>Known For : {props.list.known_for_department}</h4>
        <h4>Gender : {gender}</h4>
        <h4>Birthday : {props.list.birthday}</h4>
        <h4>Place of Birth : {props.list.place_of_birth}</h4>
      </Text_flex>
      <div style={{ textAlign: "left" }}>
        <h2>
          <i>Biography</i>
        </h2>
        <p>{props.list.biography}</p>
      </div>
      <h1>Acting Information</h1>
      <Act_Container>
        <Table className="flex">
          <First_Col>
            <h3>Release date</h3>
          </First_Col>
          <Cols>
            <h3>Title</h3>
          </Cols>
          <Cols>
            <h3>Character</h3>
          </Cols>
        </Table>
        {props.act.map((item) => {
          let release_date =
            `${item.release_date}` == "" ? " " : `${item.release_date}`;
          let character = `${item.character}` == "" ? " " : `${item.character}`;
          return (
            <Table className="flex">
              <First_Col>{release_date}</First_Col>
              <Cols>{item.title}</Cols>
              <Cols>{character}</Cols>
            </Table>
          );
        })}
      </Act_Container>
      <h1>Other Activity</h1>
      <Act_Container>
        <Table className="flex">
          <First_Col>
            <h3>Release date</h3>
          </First_Col>
          <Cols>
            <h3>Title</h3>
          </Cols>
          <Cols>
            <h3>Activity</h3>
          </Cols>
        </Table>
        {props.crew.map((item) => {
          return (
            <Table className="flex">
              <First_Col>{item.release_date}</First_Col>
              <Cols>{item.title}</Cols>
              <Cols>{item.department}</Cols>
            </Table>
          );
        })}
      </Act_Container>
      <div>
        <h1 className="flex">Images</h1>
        <div>
          {props.image.map((item) => {
            let images = "https://www.themoviedb.org/t/p/w220_and_h330_face/";
            let images_people = `${images}${item.file_path}`;
            return (
              <span>
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
