import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  statusFiltered,
  upcomingFiltered,
  dateRangeFiltered,
} from "features/filter/filterSlice";
import { IoCalendar } from "react-icons/io5";
import { DateRangePicker } from "react-date-range";
import moment from "moment";

const Filter = () => {
  return (
    <div className="flex items-center flex-wrap gap-8 w-full md:w-auto">
      <FilterByLaunchStatus />
      <FilterByUpcomingStatus />
      <FilterByDate />
    </div>
  );
};

export default Filter;

// FilterByLaunchStatus component
const FilterByLaunchStatus = () => {
  const { status } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  return (
    <div className="space-y-2">
      <p className="text-sm font-semibold">Filter by launch status</p>
      <select
        value={status}
        onChange={(e) => dispatch(statusFiltered(e.target.value))}
        className="select select-sm select-bordered select-primary w-full"
      >
        <option value="">All</option>
        <option value="true">Success</option>
        <option value="false">Failure</option>
      </select>
    </div>
  );
};

// FilterByUpcomingStatus component
const FilterByUpcomingStatus = () => {
  const { upcoming } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  return (
    <div className="space-y-2">
      <p className="text-sm font-semibold">Filter by is upcoming</p>
      <select
        value={upcoming}
        onChange={(e) => dispatch(upcomingFiltered(e.target.value))}
        className="select select-sm select-bordered select-primary"
      >
        <option value="">All</option>
        <option value="true">Upcoming</option>
        <option value="false">Not upcoming</option>
      </select>
    </div>
  );
};

// FilterByDate component
const FilterByDate = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { dateRange } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  return (
    <div className="space-y-2 w-full md:w-auto">
      <p className="text-sm font-semibold">Filter by date</p>
      <div className="flex items-center gap-2">
        <IoCalendar
          className="text-3xl cursor-pointer"
          onClick={() => setIsVisible(!isVisible)}
        />
        <p className="text-sm">
          {dateRange &&
            `From ${moment(dateRange.startDate).format(
              "Do MMM yy"
            )} to ${moment(dateRange.endDate).format("Do MMM yy")}`}
        </p>
      </div>

      {isVisible && (
        <div className="relative">
          <DateRangePicker
            ranges={[dateRange]}
            onChange={(item) => dispatch(dateRangeFiltered(item.selection))}
            showPreview={true}
            moveRangeOnFirstSelection={false}
            className="absolute md:left-[-100%] z-40"
          />
        </div>
      )}
    </div>
  );
};
