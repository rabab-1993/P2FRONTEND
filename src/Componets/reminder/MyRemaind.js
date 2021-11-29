import React, { useState,  useEffect } from 'react';
import axios from "axios";
import "./remaind.css";
const MyRemaind = () => {
    const [info, setInfo] = useState([]);

   
    useEffect(() => {
        getMyRemainder()
      }, []);

    const getMyRemainder = async () => {
        try {
        let userid = JSON.parse(localStorage.getItem("userId"));
          const res = await axios.get(`http://localhost:5400/info/remainder?userId=${userid}`);
          // const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/users/`);
          console.log("data" + res.data);
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
          <>
          {info && 
        <div className="reminde">
          {info.map((ele) => {
            return (
            <div className="remind-card">
              <img src={ele.img} className="img" />
              <div className="divcon1">
                <h1 className="header1">{ele.cityName}</h1>

                <h3 className="header1"> {ele.temp}</h3>

                <img
                  src={ele.icon}
                  className="icon"
                />
                <h3 className="header1">
                  {ele.description}
                </h3>

                <h5 className="header1">
                  Your Trip Date: {ele.date}
                </h5>
              </div>
              {/* <div className="buttonDiv1">
                <button className="addButton1" onClick={deleted}>
                  DELETE
                </button>
              </div> */}
            </div> 

            );
          })}
        </div>
    } 
    </>  
    ); 
}



export default MyRemaind
