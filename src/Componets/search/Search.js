import React, { useState, useEffect } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/system";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import CardMedia from "@mui/material/CardMedia";
import "./style.css";

const Search = () => {
  const [name, setName] = useState("");
  const [photos, setPhotos] = useState([]);
  const [video, setVideo] = useState([]);
  // useEffect(() => {
  //   getPhotos();
  // }, []);

  const getPhotos = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5400/search/photos?q=${name}`
      );

      setPhotos(res.data);
      console.log(res.data);
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
      console.log(res.data);
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
          {/* {photos.length &&
          photos.map((item) => (
            <>
              <ImageListItem key={item.id}>
                <img
                  src={`${item.webformatURL}?w=248&fit=crop&auto=format`}
                  loading="lazy"
                />
              </ImageListItem>
             
             
            </>
          ))} */}
        </ImageList>

        {video.length &&
          video.map((vid) => {
            <div className="video">
              <video
                autoPlay
                src={`${vid.videos.medium.url}?w=248&fit=crop&auto=format`}
                type="video/mp4"
              />

              {/* <video autoPlay>
                <source src={vid.videos.medium.url} type="video/mp4" />
              </video> */}
              {/* <CardMedia component="video" src={vid.videos.medium.url} />; */}
            </div>;
          })}
      </Box>
    </div>
  );
};

export default Search;
