import React from "react";

const DetailsItem = ({ text, value }) => (
  <p>
    <span className="text-primary font-bold">{text} : </span>
    {value ? value : "Not available"}
  </p>
);

export default DetailsItem;
