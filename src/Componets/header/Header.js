import { Link } from "react-router-dom";
import React from "react";
import "./style.css";
import  AccountCircleOutlinedIcon  from "@mui/icons-material/AccountCircleOutlined";
// import ClickAwayListener from '@mui/core/ClickAwayListener';

const Header = () => {
  return (
  
      <nav>
          <h1>logo</h1>
          <Link to="/">Home</Link>
          <Link to="/contact">Contact us</Link>
          
        <AccountCircleOutlinedIcon fontSize="large"/>
      </nav>
     
   
  );
};

export default Header;
