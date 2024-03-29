import React, { useState, useEffect } from "react";
import axios from "axios";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";
import { Button, Snackbar, IconButton, TextField, Box } from "@mui/material";
import { GrFormClose } from "react-icons/gr";

// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
// import Box from "@mui/material/Box";

import "./style.css";

const Reminder = () => {
  const [date, setDate] = useState(new Date());
  const [name, setName] = useState("");
  // eslint-disable-next-line
  const [description, setDescription] = useState("");
  // eslint-disable-next-line
  const [departe, setDeparte] = useState("");
  const [info, setInfo] = useState([]);
  const [remind, setRemind] = useState({
    cityName: name,
    date: date,
    description: description,
    temp: "",
    img: "",
    icon: "",
    departedDate: departe,
    userId: JSON.parse(localStorage.getItem("userId")),
  });
  const [open, setOpen] = useState(false);
  useEffect(() => {
    getCityInfo();
    // eslint-disable-next-line
  }, []);

  // Alert functions
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <IconButton
      size="medium"
      aria-label="close"
      color="success"
      onClick={handleClose}
    >
      <GrFormClose className="close-icon" />
    </IconButton>
  );

  // end

  const getCityInfo = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/info?q=${name}`);
      setInfo(res.data);
      // setDescription(res.data[0].weather[0].description)
      setRemind({
        cityName: name,
        date: date,
        description: res.data[0].weather[0].description,
        temp: String(res.data[0].main.temp),
        img: res.data[1].webformatURL,
        icon: `http://openweathermap.org/img/wn/${res.data[0].weather[0].icon}.png`,
        departedDate: departe,
        userId: JSON.parse(localStorage.getItem("userId")),
      });
    } catch (error) {
      console.log("post user data error");
    }
  };
  

  // countdown date
  const countdownD = new Date(date);
  // Get current date
  const nowDate = new Date();
  const distance = countdownD - nowDate;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));

  let search = (ev) => {
    ev.preventDefault();
    getCityInfo();
  };

  let add = async () => {
    // creatRemainder();
    try {
      const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/info/`, remind);
      // const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/users/`);
      // eslint-disable-next-line
      {
        res.status === 200 ? setOpen(true) : setOpen(false);
      }
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
              {/*  eslint-disable-next-line  */}
              <img src={info[1].webformatURL} className="img" />
              <div className="divcon">
                <h1 className="header1">{info[0].name}</h1>
                <h2>{`${days}Days until your trip to: ${info[0].name}, ${info[0].sys.country}`}</h2>
                {/* {setDeparte(`${days}Days until your trip to: ${info[0].name}, ${info[0].sys.country}`)} */}
                <h3 className="header1">
                  {" "}
                  {`The Temperature: ${info[0].main?.temp}`}
                </h3>
                {/*  eslint-disable-next-line  */}
                <img
                  src={`http://openweathermap.org/img/wn/${
                    info[0].weather && info[0].weather[0].icon
                  }.png`}
                  className="icon"
                />
                <h3 className="header1">
                  {info[0].weather && info[0].weather[0].description}
                  {/* {setDescription(info[0].weather[0].description)} */}
                  {/* {setRemind({...remind, description:info[0].weather[0].description})} */}
                </h3>

                <h4 className="header1">
                  Your Trip Date: {date.toLocaleString()}
                </h4>
              </div>

              <Button className="addButton" onClick={add}>
                ADD
              </Button>
            </div>
          ) : null}
        </>
        <Snackbar
          open={open}
          autoHideDuration={9000}
          onClose={handleClose}
          message="Reminder added successfully!"
          action={action}
        />
      </div>
    </>
  );
};

export default Reminder;
