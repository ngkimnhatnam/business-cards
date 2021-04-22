// Dependencies import
import React from "react";

const Age = ({ age }) => {
  const ageStyle = {
    fontSize: 30,
    textAlign: "center",
    color: "#F24C00",
  };
  return <div style={ageStyle}>{age} years old</div>;
};

export default Age;
