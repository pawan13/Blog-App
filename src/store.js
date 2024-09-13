import { configureStore } from "@reduxjs/toolkit";
import modeSliceReducer from "./redux/ModeSlice.js";

const store = configureStore({
  reducer: {
    mode: modeSliceReducer,
  },
});

export default store;
