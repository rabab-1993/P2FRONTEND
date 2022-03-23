
import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Componets/header/Header";
import SignUp from "./Componets/account/signUp/SignUp";
import Login from "./Componets/account/login/LogIn";
import Home from "./Componets/home/Home";
import Reminder from "./Componets/reminder/Reminder"
import MyReminder from "./Componets/reminder/MyRemaind"
import Search from "./Componets/search/Search";


function App() {
  return (
    
    <>
   
      <Header />
    <Routes>
      <Route exact path="/" element={<Home  />} />
      {/* <Route exact path="/contact" element={<ContactUs  />} /> */}
      <Route exact path="/search" element={<Search  />} />
      <Route exact path="/remind" element={<Reminder  />} />
      <Route exact path="/myremind" element={<MyReminder  />} />
      <Route exact path="/login" element={<Login  />} />
      <Route exact path="/signup" element={<SignUp  />} />
    </Routes>
    
    </>
    
  );
}

export default App;
