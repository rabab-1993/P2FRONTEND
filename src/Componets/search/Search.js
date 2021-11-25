import React,{ useState, useEffect }  from 'react';
import axios from "axios";
import TextField from "@mui/material/TextField";
import { Box } from '@mui/system';
const Search = () => {
    const [result, setResult] = useState([])
    useEffect(() => {
    getInfo();
  
    }, [result])


    const getInfo = async () => {
      try {
        const res = await axios.get(`http://localhost:5400/search?q=${result}`);
       
        setResult(res.data)
      } catch (error) {
        console.log("get result data error");
      }
    }
    

let searchResult = (ev) => {
  ev.preventDefault();
  setResult(ev.target.value)
  console.log(result);
}


    return (
        <Box>
           {/* search bar */}
      <TextField
      component="form" onSubmit={searchResult}
        type="search"
       id="standard-size-normal"
       label="Search"
       variant="standard"
     /> 
        </Box>
    )
}

export default Search
