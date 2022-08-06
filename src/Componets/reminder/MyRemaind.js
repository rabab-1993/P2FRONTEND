import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Snackbar, IconButton } from "@mui/material";
import { GrFormClose } from 'react-icons/gr';
import "./remaind.css";
const MyRemaind = () => {
  const [info, setInfo] = useState([]);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    getMyRemainder();
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
        color="inherit"
        onClick={handleClose}
      >
        <GrFormClose className="close-icon" />
      </IconButton>
    
  );
  // end
  let userid = JSON.parse(localStorage.getItem("userId"));
  const getMyRemainder = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/info/remainder?userId=${userid}`
      );
      // const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/users/`);
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
      const res = await axios.delete(
        `${process.env.REACT_APP_BASE_URL}/info/delete?_id=${id}`
      );
       // eslint-disable-next-line 
      {
        res.status === 200 ? setOpen(true) : setOpen(false);
      }
    } catch (error) {
      console.log(error);
    }
    getMyRemainder();
  };

  return (
    <>
      {info.length === 0 ? (
        <h1 style={{ textAlign: "center", paddingTop:"10rem" }}>You Don't have any reminder</h1>
      ) : (
        <div className="reminde">
          {info.length &&
            info.map((ele) => {
              return (
                <div key={ele._id} className="remind-card">
                  {/* eslint-disable-next-line  */}
                  <img src={ele.img} className="img" />
                  <div className="divcon1">
                    <h1 className="header1">{ele.cityName}</h1>

                    <h3 className="header1"> {ele.temp}</h3>
                    {/*  eslint-disable-next-line  */}
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
            })}

          <Snackbar
            open={open}
            autoHideDuration={9000}
            onClose={handleClose}
            message="deleted successfully!"
            action={action}
          />

         
        </div>
      )}
    </>
  );
};

export default MyRemaind;
