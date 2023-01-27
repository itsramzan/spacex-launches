import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "",
  upcoming: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    statusFiltered: (state, action) => {
      state.status = action.payload;
    },
    upcomingFiltered: (state, action) => {
      state.upcoming = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const { statusFiltered, upcomingFiltered } = filterSlice.actions;
