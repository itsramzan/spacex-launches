import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchText: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    searched: (state, action) => {
      state.searchText = action.payload;
    },
  },
});

export default searchSlice.reducer;
export const { searched } = searchSlice.actions;
