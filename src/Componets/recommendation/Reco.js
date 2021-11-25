import React from "react";

import {Routes, Route, Link } from "react-router-dom";

import "./style.css";
import AlUla from "./img/AlUla.jpg";
import Place from "./Place";


const Reco = () => {
   
      
  return (
    <div className="recommendation">
    
      <h1>Our Recommendations places to visit:</h1>
      <div className="recommendation-cards">
          <Link to="/place">
        <div className="reco-card">
            <img src={AlUla} alt="" />
          <h2>AlUla</h2>
        </div>
          </Link>
        <div className="reco-card">
            <img src={AlUla} alt="" />
          <h2>AlUla</h2>
        </div>
        <div className="reco-card">
            <img src={AlUla} alt="" />
          <h2>AlUla</h2>
        </div>
        
      </div>
      <Routes>
      <Route path="/place" element={<Place  />} />
    </Routes>
    </div>
  );
};

export default Reco;
