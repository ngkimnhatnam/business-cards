import React from "react";

const Name = ({ text }) => {
  const nameStyle = {
    fontSize: 30,
    textAlign: "center",
    padding: "10% 0px",
  };

  return <div style={nameStyle}>{text}</div>;
};

export default Name;
