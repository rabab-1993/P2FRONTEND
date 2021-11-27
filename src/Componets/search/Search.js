import React, { useState, useEffect } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/system";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import "./style.css";




const Search = () => {

  const [name, setName] = useState("");
  const [result, setResult] = useState([]);
  // useEffect(() => {
  //   getInfo();
  // }, [result]);

  const getInfo = async () => {
    try {
      const res = await axios.get(`http://localhost:5400/search?q=${name}`);

      setResult(res.data);
    } catch (error) {
      console.log("get result data error");
    }
  };

  let searchResult = (ev) => {
    ev.preventDefault();
    setName(ev.target.value);
    console.log(result);
    getInfo();
  };

  return (
    <div className="search">
      <Box component="form" onSubmit={searchResult}>
        {/* search bar */}
        <TextField
          type="search"
          id="standard-size-normal"
          label="Search"
          variant="standard"
          value={name}
          // onChange={(ev) => {
          //   setName(ev.target.value);
          // }}
        />
      </Box>
      {/* <div>{result.map()}</div> */}
    </div>
  );
};

export default Search;
