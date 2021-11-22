import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import "./style.css";
import AlUla from "./img/AlUla.jpg";

const Reco = () => {
  return (
    <div className="recommendation">
      <TextField id="standard-basic" label="Standard" variant="standard" />
      <h1>Our Recommendations places to visit:</h1>
      <div className="recommendation-cards">
          <Link to="/place">
        <div className="reco-card">
            <img src={AlUla} alt="" srcset="" />
          <h2>AlUla</h2>
        </div>
          </Link>
        <div className="reco-card">
            <img src={AlUla} alt="" srcset="" />
          <h2>AlUla</h2>
        </div>
        <div className="reco-card">
            <img src={AlUla} alt="" srcset="" />
          <h2>AlUla</h2>
        </div>
        
      </div>
    </div>
  );
};

export default Reco;
