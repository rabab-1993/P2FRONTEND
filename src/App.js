
import React, { useState, useEffect } from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Componets/header/Header";
import ContactUs from "./Componets/contactus/ContactUs"
import Section from "./Componets/section/Section";
import Reco from "./Componets/recommendation/Reco";
import SignUp from "./Componets/account/signUp/SignUp";
import Home from "./Componets/home/Home";

function App() {
  // const [info, setInfo] = useState([])
  // useEffect(() => {
  // getInfo();

  // }, [])
  // const getInfo = async () => {
  //   try {
  //     const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/info/`);
  //     console.log(res.data);
  //     setInfo(res.data)
  //   } catch (error) {
  //     console.log("get info data error");
  //   }
  // }
  return (
    
    <BrowserRouter>
      <Header />
    <Routes>
      <Route exact path="/" element={<Home  />} />
      {/* <Route exact path="/contact" element={<ContactUs  />} /> */}
      <Route exact path="/signup" element={<SignUp  />} />
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
