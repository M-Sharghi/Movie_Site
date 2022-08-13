import { Link } from "react-router-dom";
import {Nav_Container, NavLinks, NavActions} from "./styles"
import Movie_Menu from "../Movie_Menu";
import TVShows_Menu from "../TVShows_Menu";



function Nav(){               
    return(
        <Nav_Container className="flex navpadding">
            <NavLinks className="flex">
                <Link to="/"><img src="/icons/JMDB-logos_multi.png" alt="logo" width="200px"/></Link>
                <Link to="/" style={{fontSize:"20px", fontWeight: "bold"}}>Home</Link>
                <Link to=""><Movie_Menu /></Link>
                <Link to=""><TVShows_Menu /></Link>
                <Link to="/people" style={{fontSize:"20px", fontWeight: "bold"}}>People</Link>
                <Link to="/categories" style={{fontSize:"20px", fontWeight: "bold"}}>Categories</Link>
            </NavLinks>

            <NavActions className="flex">
                {/* <Link to="/search"><img src="/icons/search.svg" alt="search"/></Link> */}
                {/* <button>Login</button> */}
            </NavActions>
        </Nav_Container>
    );
}

export default Nav;