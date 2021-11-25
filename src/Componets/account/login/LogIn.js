import React,  { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import "./login.css";


const LogIn = () => {
  // useEffect(() => {
  //   allUser()
  // }, );
   // Navigate function to Home page
   let navigate = useNavigate();

   let toHomePage = () => {
     navigate("/");
   };
 
 
   // to creat new user
   const [getUser, setGetUser] = useState({
   
     userName: "",
     
     password: "",
   });
 
   const allUser = async () => {
     try {
       const res = await axios.get(`http://localhost:5400/users/`);
       // const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/users/`);
       let userId = JSON.parse(localStorage.getItem("userName"));
       //  window.location.reload(false);
     
      let found = res.data.find((ele) => ele.userName == getUser.userName)
      if (found == getUser) {
        console.log("done");
        // localStorage.setItem("userName", JSON.stringify(found.userName));

      } else{
        console.log("user dosnt have an account");
      }
      } catch (error) {
        console.log("get user data error");
      }
    };
 
   let log = (ev) => {
     ev.preventDefault();
     console.log("done");
     allUser()
    //  toHomePage()
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
    )
}

export default LogIn
