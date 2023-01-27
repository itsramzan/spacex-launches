import React from "react";
import { Link } from "react-router-dom";
import moment from "moment/moment";
import noImage from "assets/images/noImage.jpg";
import { IoCalendar, IoRocket } from "react-icons/io5";
import { motion } from "framer-motion";

const LaunchesGridItem = ({ launch }) => {
  const {
    flight_number,
    mission_name,
    launch_date_local,
    links: { mission_patch_small },
    rocket: { rocket_name },
  } = launch || {};

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-base-300 p-4 rounded-md space-y-2"
    >
      <img src={mission_patch_small || noImage} alt="" className="h-56 w-56 mx-auto" />
      <p className="text-lg text-primary font-bold line-clamp-1">
        {mission_name}
      </p>
      <p className="text-sm font-semibold flex items-center gap-2">
        <IoCalendar /> {moment(launch_date_local).format("Do MMM YYYY")}
      </p>
      <p className="text-sm font-semibold flex items-center gap-2">
        <IoRocket />
        {rocket_name}
      </p>

      <div className="flex justify-end">
        <Link
          to={`/launches/${flight_number}`}
          className="btn btn-sm btn-primary rounded-md"
        >
          Learn More
        </Link>
      </div>
    </motion.div>
  );
};

export default LaunchesGridItem;
