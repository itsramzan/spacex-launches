import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { statusFiltered, upcomingFiltered } from "features/filter/filterSlice";

const Filter = () => {
  return (
    <div className="flex items-center gap-8 w-full md:w-auto">
      <FilterByLaunchStatus />
      <FilterByUpcomingStatus />
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
        className="select select-sm select-bordered select-primary"
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
