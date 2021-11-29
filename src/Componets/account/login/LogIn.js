import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import "./login.css";

const LogIn = () => {
 

  // Navigate function to Home page
  let navigate = useNavigate();

  let toHomePage = () => {
    navigate("/");
  };

  // log in
  const [message, setMessage] = useState("");
  const [getUser, setGetUser] = useState({
    userName: "",

    password: "",
  });

  const allUser = async () => {
    try {
      const res = await axios.get(`http://localhost:5400/users/`);
      // const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/users/`);
     
       window.location.reload(false);

      let found = res.data.find(
        (ele) =>
          ele.userName == getUser.userName && ele.password == getUser.password
      );
      console.log(found);
      if (found) {
        localStorage.setItem("userId", JSON.stringify(found._id));
        console.log("welcome");
      } else {
        console.log("user dosnt have an account");
      }
    } catch (error) {
      console.log("get user data error");
    }
  };

  let log = (ev) => {
    ev.preventDefault();

    allUser();
     toHomePage()
    console.log(getUser);
  };
  return (
    <div className="login">
      <Container>
        <Stack spacing={5}>
          {/* User Name Field */}
          <TextField
            required
            id="standard-required"
            label="User Name"
            variant="standard"
            value={getUser.userName}
            onChange={(ev) =>
              setGetUser({ ...getUser, userName: ev.target.value })
            }
          />

          {/* Password Field */}
          <TextField
            required
            id="standard-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            autoComplete="current-password"
            variant="standard"
            value={getUser.password}
            onChange={(ev) =>
              setGetUser({ ...getUser, password: ev.target.value })
            }
          />
          <Button onClick={log}>login</Button>
        </Stack>
      </Container>
    </div>
  );
};

export default LogIn;
