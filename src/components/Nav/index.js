import { Link } from "react-router-dom";
import {Nav_Container, NavLinks, NavActions} from "./styles"
import Movie_Menu from "../Movie_Menu";
import TVShows_Menu from "../TVShows_Menu";
import { FaBars } from 'react-icons/fa';


function Nav(){  
    
    if(window.innerWidth >480){
    return(
        <Nav_Container className="flex navpadding">
            <NavLinks className="flex">
                <Link to="/"><img src="/icons/JMDB-logos_multi.png" alt="logo" width="200px"/></Link>
                <Link className="links" to="/">Home</Link>
                <Link to=""><Movie_Menu /></Link>
                <Link className="links" to=""><TVShows_Menu /></Link>
                <Link className="links" to="/people">People</Link>
                <Link className="links" to="/categories">Categories</Link>
            </NavLinks>

            <NavActions className="flex">
                {/* <a style={{cursor:"pointer"}}><img src="/icons/search.svg" alt="search"/></a> */}
                {/* <button>Login</button> */}
            </NavActions>
        </Nav_Container>
    )} else if (window.innerWidth <=480){
        return (
            <div className="flex navpadding_mobile">
                <Link to="/"><img src="/icons/JMDB-logos_multi.png" alt="logo" width="80px"/></Link>
                <FaBars />
            </div>
        )
    }
}

export default Nav;