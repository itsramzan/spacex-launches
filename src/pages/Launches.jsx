import React, { useState } from "react";
import { useGetLaunchesQuery } from "features/launch/launchApi";
import Loading from "components/UI/Loading";
import Error from "components/UI/Error";
import Heading from "components/UI/Heading";
import LaunchesGrid from "components/Launches/LaunchesGrid";

const Launches = () => {
  const {
    isFetching,
    isSuccess,
    isError,
    data: launches,
    error,
  } = useGetLaunchesQuery();

  // Decide what to render
  let content = null;
  if (isFetching) content = <Loading />;

  if (isError) content = <Error message={error?.data?.error} />;

  if (isSuccess && launches.length === 0)
    content = <Error message="No content found" />;

  if (isSuccess && launches.length > 0) {
    content = (
      <div className="space-y-4">
        <Heading text={`All Launches (${launches.length})`} />
        <LaunchesGrid {...{ launches: launches }} />
      </div>
    );
  }

  return content;
};

export default Launches;
