import React, { useState } from "react";
import axios from "axios";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import "./style.css";

const Reminder = () => {
  const [date, setDate] = useState(new Date());
  const [name, setName] = useState("");
  const [info, setInfo] = useState([]);

  const [remind, setRemind] = useState({
    cityName: name,
    date: date,
    description: "",
    temp: "",
    img: "",
    icon: "",
    userId: JSON.parse(localStorage.getItem("userId")),
  });

  const getCityInfo = async () => {
    try {
      const res = await axios.get(`http://localhost:5400/info?q=${name}`);
      // const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/users/`);
      console.log(res.data);
      setInfo(res.data);
      // localStorage.setItem("userName", JSON.stringify(newUser));
      // window.location.reload(false);
    } catch (error) {
      console.log("post user data error");
    }
  };

  const creatRemainder = async () => {
    try {
      const res = await axios.post(`http://localhost:5400/info/`, remind);
      // const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/users/`);
      console.log(res.data);
      // localStorage.setItem("userName", JSON.stringify(newUser));
    } catch (error) {
      console.log("post user data error");
    }
  };

  let search = (ev) => {
    ev.preventDefault();
    getCityInfo();
  };

  let add = () => {
    console.log("done");
    creatRemainder();
    console.log(remind);
  };

  return (
    <>
      <div className="reminder">
        <Box className="form">
          {/* date and time picker  */}
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker
              renderInput={(params) => <TextField {...params} />}
              label="Select date and time of your trip:"
              value={date}
              onChange={(newValue) => {
                setDate(newValue);
                setRemind({ ...remind, date: newValue.target.value });
              }}
              minDateTime={new Date()}
            />
          </LocalizationProvider>

          <TextField
            required
            type="text"
            label="City Name"
            id="standard-required"
            // variant="standard"
            defaultValue={name}
            onChange={(ev) => {
              setName(ev.target.value);
              setRemind({ ...remind, cityName: ev.target.value });
            }}
          />
          <Button onClick={search}>search</Button>
        </Box>

        <>
          {info.length ? (
            <div className="remind-card">
              <img src={info[1].webformatURL} className="img" />
              <div className="divcon">
                <h1 className="header1">{info[0].name}</h1>

                <h3 className="header1"> {info[0].main?.temp}</h3>

                <img
                  src={`http://openweathermap.org/img/wn/${
                    info[0].weather && info[0].weather[0].icon
                  }.png`}
                  className="icon"
                />
                <h3 className="header1">
                  {info[0].weather && info[0].weather[0].description}
                </h3>

                <h5 className="header1">
                  Your Trip Date: {date.toLocaleString()}
                </h5>
              </div>
              <div className="buttonDiv">
                <button className="addButton" onClick={add}>
                  ADD
                </button>
              </div>
            </div>
          ) : null}
        </>
      </div>
    </>
  );
};

export default Reminder;
