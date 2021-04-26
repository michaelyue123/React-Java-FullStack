import React from "react";

interface ErrorProps {}

const Error: React.FC<ErrorProps> = () => {
  return (
    <div
      style={{ textAlign: "center", margin: "10vw, auto", fontSize: "1.2em" }}
    >
      404 not found
    </div>
  );
};

export default Error;
