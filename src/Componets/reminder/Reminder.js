import React, { useState, useEffect } from "react";
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
  const [description, setDescription] = useState("");
  const [info, setInfo] = useState([]);
  const [remind, setRemind] = useState({
    cityName: name,
    date: date,
    description: description,
    temp: "",
    img: "",
    icon: "",
    userId: JSON.parse(localStorage.getItem("userId")),
  });
  useEffect(() => {
    getCityInfo()
  }, []);

  const getCityInfo = async () => {
    try {
      const res = await axios.get(`http://localhost:5400/info?q=${name}`);
      // const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/users/`);
      setInfo(res.data);
      console.log(
        `http://openweathermap.org/img/wn/${
          res.data[0].weather[0].icon
        }.png`
      );
      // setDescription(res.data[0].weather[0].description)
      setRemind({
        cityName: name,
        date:date,
        description: res.data[0].weather[0].description,
        temp:String(res.data[0].main.temp),
        img:res.data[1].webformatURL,
        icon: `http://openweathermap.org/img/wn/${
          res.data[0].weather[0].icon
        }.png`,
        userId: JSON.parse(localStorage.getItem("userId"))
      })
    } catch (error) {
      console.log("post user data error");
    }
  };

  const creatRemainder = async () => {
    console.log(remind)
    try {
      const res = await axios.post(`http://localhost:5400/info/`, remind);
      // const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/users/`);
      console.log(res.data);
      
    } catch (error) {
      console.log("post user data error");
    }
  };


   // countdown date
   const countdownD = new Date (date);
   // Get current date 
   const nowDate = new Date();
   const distance = countdownD - nowDate;
   const days = Math.floor(distance / (1000 * 60 * 60 * 24));

  let search = (ev) => {
    ev.preventDefault();
    getCityInfo();
  };

  let add = async() => {
    console.log("done");
    // creatRemainder();
    console.log(remind);
    try {
      const res = await axios.post(`http://localhost:5400/info/`, remind);
      // const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/users/`);
      console.log(res.data);
      
    } catch (error) {
      console.log("post user data error");
    }
 
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
                setRemind({ ...remind, date: newValue });
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
                <h2>{`${days}Days until your trip to: ${info[0].name}, ${info[0].sys.country}`}</h2>
                <h3 className="header1">  {`The Temperature: ${info[0].main?.temp}`}</h3>

                <img
                  src={`http://openweathermap.org/img/wn/${
                    info[0].weather && info[0].weather[0].icon
                  }.png`}
                  className="icon"/>
                <h3 className="header1">
                  {info[0].weather && info[0].weather[0].description}
                  {/* {setDescription(info[0].weather[0].description)} */}
                  {/* {setRemind({...remind, description:info[0].weather[0].description})} */}
                </h3>

                <h4 className="header1">
                  Your Trip Date: {date.toLocaleString()}
                </h4>
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
