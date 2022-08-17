import styled from "styled-components";


let Pic_flex = styled.div`
    text-align: left;
    width: 40%;
`;

let Text_flex = styled.div`
    display: flex;
    flex-direction:column;
    padding-top:32px;
    text-align: left;
    width: 60%;
    height: 535px;

`;

let Image = styled.img`
    width: 300px;
    height: 450px;
    border-radius: 16px;
    
`;

let Act_Container = styled.div`
    color: #696969;
    width: 100%;
    padding: 24px 64px;
    border-radius: 16px;
    margin-bottom: 32px;
`;
let First_Col = styled.span`
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 4px;
    text-align: left;
    width:25%;
`;

let Cols = styled.span`
    padding-top: 8px;
    padding-bottom: 8px;
    text-align: left;
    width:37.5%;
`;

let Table = styled.div`
    border-bottom: 1px solid #ccc;
`;

let H1 = styled.h1`
    padding-top: 32px;
`;


export { Pic_flex, Text_flex, Image, Act_Container, First_Col, Cols, Table, H1};


