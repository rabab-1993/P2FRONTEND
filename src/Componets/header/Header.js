import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import { SiYourtraveldottv } from 'react-icons/si';


const Header = () => {
  let navigate = useNavigate();
  
  // Navigate function to search page
  let toSearchPage = () => {
    navigate("/search");
  };
  // Navigate function to sign up page
  let toSignUpPage = () => {
    navigate("/signup");
  };

  // Navigate function to login page
  let toLogInPage = () => {
    navigate("/login");
  };

// Navigate function to remind page
  let toRemindPage = () => {
    navigate("/remind");
  };
// Navigate function to remind page
  let toMyRemindPage = () => {
    navigate("/myremind");
  };

// log in 
const [isLog, setIsLog] = useState(false);

  //
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav>

      <Link to="/" >
          <SiYourtraveldottv className="logo"/>
        </Link>
      <Link to="/"><HomeIcon sx={{ fontSize: 30 }} /></Link>
      {/* <Link to="/contact">Contact us</Link> */}
      <Link to="/search"><SearchIcon  onClick={toSearchPage}/></Link>
      <MenuItem onClick={handleClose}>
        <Link to="/remind" onClick={toRemindPage}>
          Reminder
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="/signup" onClick={toSignUpPage}>
          Register
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="/login" onClick={toLogInPage}>
          Log in
        </Link>
      </MenuItem>
      <Link to="/myremind" onClick={toMyRemindPage}>
          MyRemaind
        </Link>
    

      {/* <div>
        <AccountCircleOutlinedIcon
          id="fade-button"
          aria-controls="fade-menu"
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          fontSize="large"
        />

        <Menu
          id="fade-menu"
          MenuListProps={{
            "aria-labelledby": "fade-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
        </Menu>
      </div> */}
    </nav>
  );
};

export default Header;
