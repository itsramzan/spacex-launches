import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "features/api/apiSlice";
import searchReducer from "features/search/searchSlice";
import filterReducer from "features/filter/filterSlice";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    search: searchReducer,
    filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
