import React from "react";
import Section from "../section/Section";
import Reco from "../recommendation/Reco";
import ContactUs from "../contactus/ContactUs"
import "./style.css";
import Search from "../search/Search";

const Home = () => {
  return (
    <div className="home">
      
      <Section />
      <Search />
      <Reco />
      <ContactUs />
    </div>
  );
};

export default Home;
