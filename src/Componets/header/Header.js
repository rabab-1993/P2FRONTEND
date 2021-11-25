import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";

const Header = () => {
  // Navigate function to sign up page
  let navigate = useNavigate();

  let toSignUpPage = () => {
    navigate("/signup");
  };

  // Navigate function to sign up page
  let toLogInPage = () => {
    navigate("/login");
  };
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
      <h1>logo</h1>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact us</Link>
      <MenuItem onClick={handleClose}>
        <Link to="/signup" onClick={toSignUpPage}>
          Register
        </Link>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <Link to="/login" onClick={toLogInPage}>
          Log in
        </Link>
      </MenuItem>
    

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
