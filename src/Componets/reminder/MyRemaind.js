import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "@mui/material/Button";

import "./remaind.css";
const MyRemaind = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    getMyRemainder();
  }, []);

  let userid = JSON.parse(localStorage.getItem("userId"));
  const getMyRemainder = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5400/info/remainder?userId=${userid}`
      );
      // const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/users/`);
      console.log(res.data);
      setInfo(res.data);
      // localStorage.setItem("userName", JSON.stringify(newUser));
      // window.location.reload(false);
    } catch (error) {
      console.log("post user data error");
    }
  };

  //   delete reminder
  let deleteMyRemainder = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:5400/info/delete?_id=${id}`);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
    getMyRemainder();
  };

  return (
    <>
    {info.length === 0 ? (
    <h1 style={{textAlign: "center"}}>You Don't have any reminder</h1>
    ) : (
      <div className="reminde">
      {info.length && (
          info.map((ele) => {
            return (
              <div className="remind-card">
                <img src={ele.img} className="img" />
                <div className="divcon1">
                  <h1 className="header1">{ele.cityName}</h1>

                  <h3 className="header1"> {ele.temp}</h3>

                  <img src={ele.icon} className="icon" />
                  <h3 className="header1">{ele.description}</h3>

                  <h5 className="header1">Your Trip Date: {ele.date}</h5>
                </div>
                <div className="delete-bttn">
                  <Button
                    color="error"
                    variant="outlined"
                    className="addButton1"
                    onClick={() => deleteMyRemainder(ele._id)}
                  >
                    DELETE
                  </Button>
                </div>
              </div>
            );
          })
      )}
        </div>
    )}
      
    </>
  );
};

export default MyRemaind;
