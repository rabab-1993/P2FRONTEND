import React from "react";
import Section from "../section/Section";
import Reco from "../recommendation/Reco";
import ContactUs from "../contactus/ContactUs"
import "./style.css";
import Search from "../search/Search";

const Home = () => {
  return (
    <>
      
      <Section />
      <Search />
      <Reco />
      <ContactUs />
    </>
  );
};

export default Home;
