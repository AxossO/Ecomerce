import { configureStore } from "@reduxjs/toolkit";
import { mainSliceReducer } from "./components/reducers/reducers";
export const store = configureStore({
  reducer: {
    main: mainSliceReducer,
  },
});
