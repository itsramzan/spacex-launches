import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="max-w-2xl space-y-4 text-center">
        <p className="text-3xl md:text-6xl text-primary font-bold">SpaceX Launches</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In adipisci
          placeat id ipsam dolor dolores enim inventore rerum provident veniam.
          Accusantium nobis illum amet perferendis, facilis cumque sequi quae
          quis.
        </p>
        <Link to="/launches" className="btn btn-md btn-primary rounded-full">
          See Launches
        </Link>
      </div>
    </div>
  );
};

export default Home;