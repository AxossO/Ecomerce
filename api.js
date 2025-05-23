import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const url = "http://localhost:1023/";

// // const items = await Item.find();

const sliderImages = () => ({
  method: "GET",
  url: `${url}getImg`,
});

const secSliderImages = () => ({
  method: "GET",
  url: `${url}getSecImg`,
});

const productsURL = () => ({
  method: "GET",
  url: `${url}getProducts`,
});

export const ImgSlider = createAsyncThunk("getImg", async () => {
  const response = await axios.request(sliderImages());
  // console.log(response);
  return response.data;
});

export const secondImgSlider = createAsyncThunk("getSecImg", async () => {
  const response = await axios.request(secSliderImages());
  // console.log(response);
  return response.data;
});

export const productsData = createAsyncThunk("getProducts", async () => {
  const response = await axios.request(productsURL());
  return response.data;
});

// export const turnToDoubleJson = createAsyncThunk("/game", async () => {
//   const response = await axios.get(
//     "https://api.rawg.io/api/games/58175?key=c5775c20f37a4480b425de48af53aa55"
//   );
//   const game = response.data;
//   const filter = {
//     id: game.id,
//     name: game.name,
//     description: game.description,
//     price: null, // No price info in API
//     condition: "Digital", // Placeholder if needed
//     genre: game.genres.map((g) => g.name),
//     releaseDate: game.released,
//     ageRating: null,
//     platform: game.metacritic_platforms.map((p) => p.platform.name).join(", "),
//     gameEdition: "Standard Edition",
//     poster: game.background_image,
//     backgroundImages: null,
//   };
//   console.log(filter);
//   return filter;
// });
