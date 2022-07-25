import styled from "styled-components";


let Pic_flex = styled.div`
    display: flex;
    flex-direction:column;
    padding :32px;
    text-align: left;
    width: 30%;
`;

let Text_flex = styled.div`
    display: flex;
    flex-direction:column;
    padding-top:32px;
    text-align: left;
    width: 60%;
    height: 870px;

`;

let Image = styled.img`
    width: 300px;
    height: 450px;
    border-radius: 16px;
`;


export { Pic_flex, Text_flex, Image };
