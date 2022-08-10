import styled from "styled-components";

let Nav_Container = styled.nav`
  background-image: linear-gradient(0deg,#232328,#343437 101.47%);
  backdrop-filter: blur(4px);
  position: sticky;
  top: 0;
  z-index: 10;
`;

let NavLinks = styled.div`
  width: 60%;
`;


let NavActions = styled.div`
  // width: 128px;
`;


export { Nav_Container, NavLinks, NavActions };
