import React, { useState } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/system";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import "./style.css";

const Search = () => {
  const [name, setName] = useState("");
  const [photos, setPhotos] = useState([]);
   // eslint-disable-next-line 
  const [video, setVideo] = useState([]);

  const getPhotos = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/search/photos?q=${name}`
      );

      setPhotos(res.data);
     
    } catch (error) {
      console.log("get result data error");
    }
  };
  const getVideos = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5400/search/videos?q=${name}`
      );

      setVideo(res.data);
    } catch (error) {
      console.log("get result data error");
    }
  };

  let searchResult = (ev) => {
    ev.preventDefault();
    setName(ev.target.value);
    getPhotos();
    getVideos();
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
          defaultValue={name}
          onChange={(ev) => {
            setName(ev.target.value);
          }}
        />
      </Box>
      <Box sx={{ width: 1300, height: 750 }}>
        <ImageList variant="masonry" cols={3} gap={8}>
          {
            photos.map((item) => (
              <>
                <ImageListItem key={item.id}>
                  {/*  eslint-disable-next-line  */}
                  <img
                    src={`${item.webformatURL}?w=248&fit=crop&auto=format`}
                    loading="lazy"
                  />
                </ImageListItem>
              </>
            ))}

         
        </ImageList>
      </Box>
    </div>
  );
};

export default Search;
