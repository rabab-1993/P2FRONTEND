import React, { useState } from 'react';
import axios from "axios";
import "./remaind.css";
const MyRemaind = () => {
    const [info, setInfo] = useState([]);
    const [date, setDate] = useState(new Date());
    const getMyRemainder = async () => {
        try {
          const res = await axios.get(`http://localhost:5400/info/remainder`);
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

      let deleted = () => {
        console.log("deleted");
       
       
      };


    return (
        <div className="myremind">
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
                <button className="addButton" onClick={deleted}>
                  ADD
                </button>
              </div>
            </div>
          ) : null}
        </>
        </div>
    )
}

export default MyRemaind
