import { Link } from "react-router-dom";
import { Nav_Container, NavLinks, Mobile_Submenu } from "./styles";
import Movie_Menu from "../Movie_Menu";
import TVShows_Menu from "../TVShows_Menu";
import { FaBars } from "react-icons/fa";
import { MdTv, MdOutlineMovie, MdPeople, MdCategory } from "react-icons/md";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { useState } from "react";

function Nav() {
  let [drawerIsOpen, setDrawerIsOpen] = useState(false);

  if (window.innerWidth > 480) {
    return (
      <Nav_Container className="flex navpadding">
        <NavLinks className="flex">
          <Link to="/">
            <img src="/icons/JMDB-logos_multi.png" alt="logo" width="200px" />
          </Link>
          <Link className="links" to="/">
            Home
          </Link>
          <Link to="">
            <Movie_Menu />
          </Link>
          <Link to="">
            <TVShows_Menu />
          </Link>
          <Link className="links" to="/people">
            People
          </Link>
          <Link className="links" to="/categories">
            Categories
          </Link>
        </NavLinks>
      </Nav_Container>
    );
  } else if (window.innerWidth <= 480) {
    return (
      <div className="flex navpadding_mobile">
        <Link to="/">
          <img src="/icons/JMDB-logos_multi.png" alt="logo" width="80px" />
        </Link>
        <FaBars
          onClick={() => {
            setDrawerIsOpen(true);
          }}
        />
        <Drawer
          anchor="right"
          open={drawerIsOpen}
          onClose={() => {
            setDrawerIsOpen(false);
          }}
          PaperProps={{ sx: { backgroundColor: "#232328" } }}
        >
          <Box>
            <div className="flex_mobile">
              <MdOutlineMovie />
              <div className="mobile_menu">Movies</div>
            </div>

            <Link to="/movie">
              <Mobile_Submenu>Popular</Mobile_Submenu>
            </Link>
            <Link to="/movie/now_playing">
              <Mobile_Submenu>Now Playing</Mobile_Submenu>
            </Link>
            <Link to="/movie/upcoming">
              <Mobile_Submenu>Upcoming</Mobile_Submenu>
            </Link>
            <Link to="/movie/top_rated">
              <Mobile_Submenu>Top Rated</Mobile_Submenu>
            </Link>
            <br />
            <hr />

            <div className="flex_mobile">
              <MdTv />
              <div className="mobile_menu">TV Shows</div>
            </div>
            <Link to="/tv">
              <Mobile_Submenu>Popular</Mobile_Submenu>
            </Link>
            <Link to="/tv/airing_today">
              <Mobile_Submenu>Airing Today</Mobile_Submenu>
            </Link>
            <Link to="/tv/on-the-air">
              <Mobile_Submenu>On TV</Mobile_Submenu>
            </Link>
            <Link to="/tv/top_rated">
              <Mobile_Submenu>Top Rated</Mobile_Submenu>
            </Link>
            <br />
            <hr />

            <div className="flex_mobile">
              <MdPeople />
              <Link className="mobile_menu" to="/people">
                People
              </Link>
            </div>
            <hr />

            <div className="flex_mobile">
              <MdCategory />
              <Link className="mobile_menu" to="/categories">
                Categories
              </Link>
            </div>
            <hr />
          </Box>
        </Drawer>
      </div>
    );
  }
}

export default Nav;
