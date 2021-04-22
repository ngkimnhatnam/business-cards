// Dependencies import
import React from "react";

const Name = ({ text }) => {
  const nameStyle = {
    fontSize: 30,
    textAlign: "center",
    padding: "5% 0px",
    color: "#485696",
  };

  return <div style={nameStyle}>{text}</div>;
};

export default Name;
