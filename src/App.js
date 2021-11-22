import axios from "axios";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./Componets/header/Header";
import ContactUs from "./Componets/contactus/ContactUs"
import Section from "./Componets/section/Section";
import Reco from "./Componets/recommendation/Reco";

function App() {
  // const [info, setInfo] = useState([])
  // useEffect(() => {
  // getInfo();

  // }, [])
  // const getInfo = async () => {
  //   try {
  //     const res = await axios.get(`${(process.env.REACT_APP_BASE_URL}/info/`);
  //     console.log(res.data);
  //     setInfo(res.data)
  //   } catch (error) {
  //     console.log("get info data error");
  //   }
  // }
  return (
    <>
      <Header />
      <Section />
      <Reco />
    <Routes>
      <Route exact path="/contact" element={<ContactUs  />} />
    </Routes>
    </>
  );
}

export default App;
