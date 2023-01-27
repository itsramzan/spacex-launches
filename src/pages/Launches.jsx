import React, { useState } from "react";
import { useGetLaunchesQuery } from "features/launch/launchApi";
import { useSelector } from "react-redux";
import Loading from "components/UI/Loading";
import Error from "components/UI/Error";
import Heading from "components/UI/Heading";
import Search from "components/Launches/Search";
import LaunchesGrid from "components/Launches/LaunchesGrid";

const Launches = () => {
  const {
    isFetching,
    isSuccess,
    isError,
    data: launches,
    error,
  } = useGetLaunchesQuery();

  const { searchText } = useSelector((state) => state.search);

  // Decide what to render
  let content = null;
  if (isFetching) content = <Loading />;

  if (isError) content = <Error message={error?.data?.error} />;

  if (isSuccess && launches.length === 0)
    content = <Error message="No content found" />;

  if (isSuccess && launches.length > 0) {
    // Search from launches
    const searched = !searchText
      ? launches
      : launches.filter((launch) =>
          launch.rocket.rocket_name.toLowerCase().includes(searchText)
        );

    content = (
      <div className="space-y-4">
        {/* Heading */}
        <Heading text={`All Launches (${searched.length})`} />

        {/* Search and filtering section */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-0 items-center justify-between pb-2">
          <Search />
        </div>

        {/* Search and filtering info text */}
        <p>{searchText && `Search by ${searchText}`}</p>

        {/* Launch items grid */}
        <LaunchesGrid {...{ launches: searched }} />
      </div>
    );
  }

  return content;
};

export default Launches;
