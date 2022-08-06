import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import MenuItem from "@mui/material/MenuItem";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import { SiYourtraveldottv } from "react-icons/si";

const Header = () => {
  // eslint-disable-next-line
  const [isLog, setIsLog] = useState();
  const [user, setUser] = useState();
  let navigate = useNavigate();
  useEffect(() => {
    let userid = JSON.parse(localStorage.getItem("userId"));
    if (userid) {
      setIsLog(true);
      setUser(userid);
    } else {
      setIsLog(false);
    }
  }, []);
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

  //
  // eslint-disable-next-line
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logOut = () => {
    localStorage.clear();
    navigate("/");
    window.location.reload(false);
  };
  return (
    <>
      {user ? (
        <nav>
          <Link to="/">
            <SiYourtraveldottv className="logo" />
          </Link>
          <Link to="/">
            <HomeIcon sx={{ fontSize: 30 }} />
          </Link>
          {/* <Link to="/contact">Contact us</Link> */}
          <Link to="/search">
            <SearchIcon onClick={toSearchPage} />
          </Link>
          <MenuItem onClick={handleClose}>
            <Link to="/remind" onClick={toRemindPage}>
              Reminder
            </Link>
          </MenuItem>

          <MenuItem>
            <Link to="/login" onClick={logOut}>
              Log out
            </Link>
          </MenuItem>
          <Link to="/myremind" onClick={toMyRemindPage}>
            MyRemaind
          </Link>
        </nav>
      ) : (
        <nav>
          <Link to="/">
            <SiYourtraveldottv className="logo" />
          </Link>
          <Link to="/">
            <HomeIcon sx={{ fontSize: 30 }} />
          </Link>
          {/* <Link to="/contact">Contact us</Link> */}

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
        </nav>
      )}
    </>
  );
};

export default Header;
