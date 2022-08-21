import styled from "styled-components";

let Container = styled.div`
  padding: 24px;
  border-top: 1px solid #fff;
`;


let Contacts = styled.div`
    padding: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

let Logo = styled.a`
    padding: 8px;
`;

let Legals = styled.h4`
    font-size:18px;
    font-weight: bold;
`;

let Policy = styled.p`
    font-size:14px;
`;



export { Container, Contacts, Logo, Legals, Policy };
