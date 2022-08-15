
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
      <Link to="" onClick={handleClick} className="links">TV Shows
      </Link>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} component={Link} to="/tv" sx={{ color:'#424242' }}>Popular</MenuItem>
        <MenuItem onClick={handleClose} component={Link} to="/tv/airing_today" sx={{ color:'#424242' }}>Airing Today</MenuItem>
        <MenuItem onClick={handleClose} component={Link} to="/tv/on-the-air" sx={{ color:'#424242' }}>On TV</MenuItem>
        <MenuItem onClick={handleClose} component={Link} to="/tv/top_rated" sx={{ color:'#424242' }}>Top Rated</MenuItem>
      </Menu>
    </div>
  );
}