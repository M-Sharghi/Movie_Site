
import {useState} from 'react';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { NavLink, Link } from "react-router-dom";
 

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
      <Link to="" onClick={handleClick} style={{fontSize:"20px", fontWeight: "bold"}}>TV Shows
      </Link>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} component={Link} to="/tv" sx={{ color:'#7c4dff' }}>Popular</MenuItem>
        <MenuItem onClick={handleClose} component={Link} to="/tv/airing_today" sx={{ color:'#7c4dff' }}>Airing Today</MenuItem>
        <MenuItem onClick={handleClose} component={Link} to="/tv/on-the-air" sx={{ color:'#7c4dff' }}>On TV</MenuItem>
        <MenuItem onClick={handleClose} component={Link} to="/tv/top_rated" sx={{ color:'#7c4dff' }}>Top Rated</MenuItem>
        {/* <MenuItem onClick={handleClose} component={Link} to="/tv/latest" sx={{ bgcolor: '#212121',color:'#7c4dff' }}>Latest</MenuItem> */}
      </Menu>
    </div>
  );
}