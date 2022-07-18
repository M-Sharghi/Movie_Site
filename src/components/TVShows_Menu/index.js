
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
        return values.isActive ? activestyle : undefined;}}>TV Shows
      </NavLink>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} component={Link} to="/tv" sx={{ bgcolor: '#212121',color:'#7c4dff' }}>Popular</MenuItem>
        <MenuItem onClick={handleClose} component={Link} to="/tv/airing_today" sx={{ bgcolor: '#212121',color:'#7c4dff' }}>Airing Today</MenuItem>
        <MenuItem onClick={handleClose} component={Link} to="/tv/on-the-air" sx={{ bgcolor: '#212121',color:'#7c4dff' }}>On TV</MenuItem>
        <MenuItem onClick={handleClose} component={Link} to="/tv/top_rated" sx={{ bgcolor: '#212121',color:'#7c4dff' }}>Top Rated</MenuItem>
        {/* <MenuItem onClick={handleClose} component={Link} to="/tv/latest" sx={{ bgcolor: '#212121',color:'#7c4dff' }}>Latest</MenuItem> */}
      </Menu>
    </div>
  );
}