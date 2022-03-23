import React from "react";
import "./style.css";

const Section = () => {
  return (
    <div className="section">
      <div className="box1"></div>
      <div className="box2"></div>
      <div className="box3">
        {/*  eslint-disable-next-line  */}
        <img src="https://images.pexels.com/photos/731217/pexels-photo-731217.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
      </div>
      <div className="box4">
        <h3> Travel the world </h3>
        <p>
          The fun part of traveling is discovering unique and offbeat places.
          Find something different on your trip with our website.
        </p>
        {/* <div className="circle"></div> */}
      </div>
    </div>
  );
};

export default Section;
