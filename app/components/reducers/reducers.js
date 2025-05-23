import { ImgSlider, productsData, secondImgSlider } from "@/api";
const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  sliderImages: {
    imgs: [],
    status: "Failed",
  },
  secondImgSlider: {
    secImgs: [],
    secStatus: "Failed",
  },
  productsData: {
    products: [],
    productStatus: "Failed",
  },
};

const MainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(ImgSlider.fulfilled, (state, action) => {
        state.sliderImages.imgs = action.payload;
        state.sliderImages.status = "fulfilled";
      })
      .addCase(secondImgSlider.fulfilled, (state, action) => {
        state.secondImgSlider.secImgs = action.payload;
        state.secondImgSlider.secStatus = "fulfilled";
      })
      .addCase(productsData.fulfilled, (state, action) => {
        state.productsData.products = action.payload;
        state.productsData.productStatus = "fulfilled";
      });
  },
});

export const mainSliceReducer = MainSlice.reducer;
