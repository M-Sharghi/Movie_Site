import styled from "styled-components";


let People_name = styled.div`
  width: 230px;
  padding:10px 12px;
  font-size: large;
  text-align: left;
  height: 32px;
`;

let Pic_flex = styled.div`
    display: flex;
    flex-direction:column;
    padding-top:32px
`;

let Image = styled.img`
  width: 235px;
  height: 280px;
  border-radius: 12px;
`;


let Mob_People_name = styled.div`
  width: 120px;
  padding:10px 8px 10px 12px;
  // padding-left: 16px;
  font-size: 10px;
  text-align: left;
  height: 24px;
`;

let Mob_Pic_flex = styled.div`
    display: flex;
    flex-direction:column;
    padding-top:32px
`;

let Mob_Image = styled.img`
  width: 100px;
  height: 180px;
  border-radius: 12px;
`;


export { People_name, Pic_flex, Image, Mob_People_name, Mob_Pic_flex, Mob_Image };
