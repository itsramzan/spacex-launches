import React from "react";
import { useGetLaunchesQuery } from "features/launch/launchApi";
import { useSelector } from "react-redux";
import Loading from "components/UI/Loading";
import Error from "components/UI/Error";
import Heading from "components/UI/Heading";
import Search from "components/Launches/Search";
import Filter from "components/Launches/Filter";
import LaunchesGrid from "components/Launches/LaunchesGrid";
import moment from "moment";

const Launches = () => {
  const {
    isFetching,
    isSuccess,
    isError,
    data: launches,
    error,
  } = useGetLaunchesQuery();

  const { searchText } = useSelector((state) => state.search);
  const { status, upcoming, dateRange } = useSelector((state) => state.filter);

  // Decide what to render
  let content = null;
  if (isFetching) content = <Loading />;

  if (isError) content = <Error message={error?.data?.error} />;

  if (isSuccess && launches.length === 0)
    content = <Error message="No content found" />;

  // This block run if everythin is ok
  if (isSuccess && launches.length > 0) {
    // Search from launches
    const searchedData = !searchText
      ? launches
      : launches.filter((launch) =>
          launch.rocket.rocket_name.toLowerCase().includes(searchText)
        );

    // Filter data by launch status from searchedData
    const statusFilteredData = !status
      ? searchedData
      : searchedData.filter((launch) => {
          if (status === "true") return launch.launch_success === true;
          if (status === "false") return launch.launch_success === false;
          return true;
        });

    // Filter data by launch upcoming from statusFilteredData
    const upcomingFilteredData = !upcoming
      ? statusFilteredData
      : statusFilteredData.filter((launch) => {
          if (upcoming === "true") return launch.upcoming === true;
          if (upcoming === "false") return launch.upcoming === false;
          return true;
        });

    // Filter data by date from upcomingFilteredData
    const dateFilteredData = upcomingFilteredData.filter((launch) => {
      const launchDate = moment(launch.launch_date_local);
      const startDate = dateRange.startDate;
      const endDate = dateRange.endDate;
      return (
        launchDate.isSameOrAfter(startDate) &&
        launchDate.isSameOrBefore(endDate)
      );
    });

    content = (
      <div className="space-y-4">
        {/* Heading */}
        <Heading text={`All Launches (${dateFilteredData.length})`} />

        {/* Search and filtering section */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-0 items-center justify-between pb-2">
          <Search />
          <Filter />
        </div>

        {/* Search and filtering info text */}
        <p className="text-xs font-semibold">
          {searchText && `Search by rocket name ${searchText} `}
          {status &&
            `Filter by launch status ${
              status === "true" ? "success" : "failed"
            }`}
          {upcoming && ` Filter by upcoming status ${upcoming}`}
        </p>

        {/* Launch items grid */}
        <LaunchesGrid {...{ launches: dateFilteredData }} />
      </div>
    );
  }

  return content;
};

export default Launches;
