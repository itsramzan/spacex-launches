import React from "react";
import { useParams } from "react-router-dom";
import { useGetLaunchQuery } from "features/launch/launchApi";
import Loading from "components/UI/Loading";
import Error from "components/UI/Error";
import Heading from "components/UI/Heading";
import LaunchDetails from "components/Launch/LaunchDetails";

const Launch = () => {
  const { id } = useParams();
  const {
    isFetching,
    isSuccess,
    isError,
    data: launch,
    error,
  } = useGetLaunchQuery({ id });

  // Decide what to render
  let content = null;
  if (isFetching) content = <Loading />;

  if (isError) content = <Error message={error?.data?.error} />;

  if (isSuccess && launch) content = <Error message="No content found" />;

  if (isSuccess && launch) {
    content = (
      <div className="space-y-4">
        <Heading text="Details Information" />
        <LaunchDetails {...{ launch }} />
      </div>
    );
  }

  return content;
};

export default Launch;
