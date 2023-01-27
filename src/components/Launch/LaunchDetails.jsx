import React from "react";
import moment from "moment/moment";
import noImage from "assets/images/noImage.jpg";
import DetailsItem from "./DetailsItem";

const LaunchDetails = ({ launch }) => {
  const {
    mission_name,
    details,
    launch_date_local,
    launch_success,
    flight_number,
    launch_site: { site_name_long },
    rocket: { rocket_name, rocket_type },
    links: { mission_patch, youtube_id, wikipedia },
  } = launch || {};

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Details left section */}
      <div className="space-y-2">
        <img
          src={mission_patch || noImage}
          alt=""
          className="w-full md:w-6/12"
        />
        <p className="text-3xl text-primary font-bold">{mission_name}</p>
        <DetailsItem text="Details" value={details} />
        <DetailsItem
          text="Launch at"
          value={moment(launch_date_local).format("Do MMM YYYY")}
        />
        <DetailsItem text="Flight no" value={flight_number} />
        <DetailsItem text="Launch site" value={site_name_long} />
        <DetailsItem text="Rocket name" value={rocket_name} />
        <DetailsItem text="Rocket type" value={rocket_type} />
        <DetailsItem
          text="Launch status"
          value={
            launch_success ? "Successfully launched" : "Failed to launched"
          }
        />
        <p>
          Read more about -{" "}
          <a href={wikipedia} className="text-primary underline">
            {mission_name}
          </a>
        </p>
      </div>

      {/* Details right section */}
      <div className="">
        <iframe
          width="100%"
          className="aspect-video"
          src={`https://www.youtube.com/embed/${youtube_id}`}
          title={mission_name}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default LaunchDetails;
