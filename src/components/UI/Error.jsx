import React from "react";

const Error = ({ message }) => {
  return (
    <div>
      <p>{message || "Something went wrong"}</p>
    </div>
  );
};

export default Error;
