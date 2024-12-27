import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Reducers/Slice"

export const store = configureStore({
  reducer: {
    userReducer: userReducer,
  },
});
