import { NavLink, Link } from "react-router-dom";
import {NavLinks, NavActions} from "./styles"
import Movie_Menu from "../Movie_Menu";
import TVShows_Menu from "../TVShows_Menu";

 

let activestyle={
    color:"#6a5acd"
};

function Nav(){
    return(
        <nav className="flex auto">
            <NavLinks className="flex">
            <NavLink to="/" style={(values)=>{
                return values.isActive ? activestyle : undefined;}}>Home
            </NavLink>
            <NavLink to="#" style={(values)=>{
                return values.isActive ? activestyle : undefined;}}><Movie_Menu />
            </NavLink>
            <NavLink to="/#" style={(values)=>{
                return values.isActive ? activestyle : undefined;}}><TVShows_Menu />
            </NavLink>
            <NavLink to="/categories" style={(values)=>{
                return values.isActive ? activestyle : undefined;}}>Categories
            </NavLink>
            <NavLink to="/people" style={(values)=>{
                return values.isActive ? activestyle : undefined;}}>People
            </NavLink>
            </NavLinks>
            

            <NavActions className="flex">
                <Link to="/search"><img src="./icons/search.svg" alt="search"/></Link>
                <button>Login</button>
            </NavActions>
        </nav>
    )
}

export default Nav;