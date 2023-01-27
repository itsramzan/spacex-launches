import React from "react";
import LaunchesGridItem from "./LaunchesGridItem";
import { nanoid } from "nanoid";
import { AnimatePresence } from "framer-motion";

const LaunchesGrid = ({ launches }) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-8">
      <AnimatePresence>
        {launches.map((launch) => (
          <LaunchesGridItem key={nanoid()} {...{ launch }} />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default LaunchesGrid;
