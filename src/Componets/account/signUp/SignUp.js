import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import "./style.css";

const Signup = () => {
  // Navigate function to Home page
  let navigate = useNavigate();
// to creat new user
const [newUser, setNewUser] = useState({
  name: "",
  userName: "",
  email: "",
  password: "",
});
  let toHomePage = () => {
    navigate("/");
  };


  

  const creatUser = async () => {
    try {
      const res = await axios.post(`http://localhost:5400/users/`, newUser);
      // const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/users/`);
      console.log(res.data);
      localStorage.setItem("userId", JSON.stringify(res.data._id));
      window.location.reload(false);
    } catch (error) {
      console.log("post user data error");
    }
  };

  let submit =  () => {
    console.log("done");
    creatUser();
    toHomePage()
  };

  return (
    <div className="sign">
      <h1>Creat an Account</h1>
      <Container>
        <Stack spacing={5}>
          {/* Name Field */}
          <TextField
            required
            id="standard-required"
            label="Name"
            variant="standard"
            value={newUser.name}
            onChange={(ev) => setNewUser({ ...newUser, name: ev.target.value })}
          />

          {/* User Name Field */}
          <TextField
            required
            id="standard-required"
            label="User Name"
            variant="standard"
            value={newUser.userName}
            onChange={(ev) =>
              setNewUser({ ...newUser, userName: ev.target.value })
            }
          />

          {/* Email Field */}
          <TextField
            required
            id="standard-required"
            label="Email"
            type="email"
            variant="standard"
            value={newUser.email}
            onChange={(ev) =>
              setNewUser({ ...newUser, email: ev.target.value })
            }
          />

          {/* Password Field */}
          <TextField
            required
            id="standard-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="standard"
            value={newUser.password}
            onChange={(ev) =>
              setNewUser({ ...newUser, password: ev.target.value })
            }
          />
          <Button onClick={submit}>signup</Button>
        </Stack>
      </Container>
    </div>
  );
};

export default Signup;
