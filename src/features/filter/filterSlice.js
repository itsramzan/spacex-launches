import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "",
  upcoming: "",
  dateRange: {
    startDate: new Date("03-25-2006"),
    endDate: new Date(),
    key: "selection",
  },
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
    dateRangeFiltered: (state, action) => {
      state.dateRange = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const { statusFiltered, upcomingFiltered, dateRangeFiltered } =
  filterSlice.actions;
