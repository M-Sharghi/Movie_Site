
import {useState} from 'react';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Link } from "react-router-dom";
 

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
      <Link to="" onClick={handleClick} className="links">Movie</Link>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} component={Link} to="/movie" sx={{ color:'#424242' }}>Popular</MenuItem>
        <MenuItem onClick={handleClose} component={Link} to="/movie/now_playing" sx={{ color:'#424242' }}>Now Playing</MenuItem>
        <MenuItem onClick={handleClose} component={Link} to="/movie/upcoming" sx={{ color:'#424242' }}>Upcoming</MenuItem>
        <MenuItem onClick={handleClose} component={Link} to="/movie/top_rated" sx={{ color:'#424242' }}>Top Rated</MenuItem>
      </Menu>
    </div>
  );
}