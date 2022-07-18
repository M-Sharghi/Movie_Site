
import {useState} from 'react';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { NavLink, Link } from "react-router-dom";

let activestyle={
  color:"#6a5acd",
  fontWeight: "800px"
}; 

export default function App() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <NavLink to="#" onClick={handleClick} style={(values)=>{
        return values.isActive ? activestyle : undefined;}}>Movie
      </NavLink>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} component={Link} to="/movie" sx={{ bgcolor: '#212121',color:'#7c4dff' }}>Popular</MenuItem>
        <MenuItem onClick={handleClose} component={Link} to="/movie/now_playing" sx={{ bgcolor: '#212121',color:'#7c4dff' }}>Now Playing</MenuItem>
        <MenuItem onClick={handleClose} component={Link} to="/movie/upcoming" sx={{ bgcolor: '#212121',color:'#7c4dff' }}>Upcoming</MenuItem>
        <MenuItem onClick={handleClose} component={Link} to="/movie/top_rated" sx={{ bgcolor: '#212121',color:'#7c4dff' }}>Top Rated</MenuItem>
        {/* <MenuItem onClick={handleClose} component={Link} to="/movie/latest" sx={{ bgcolor: '#212121',color:'#7c4dff' }}>Latest</MenuItem> */}
      </Menu>
    </div>
  );
}