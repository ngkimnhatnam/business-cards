import React from "react";

const Button = ({ text, handleClick }) => {
  const buttonStyle = {
    textAlign: "center",
    border: "1px solid #485696",
    borderRadius: "50px",
    margin: "0px 25% 0px 25%",
    padding: "10px 0px 10px 0px",
    color: "#E7E7E7",
    backgroundColor: "#485696",
  };
  return (
    <button onClick={handleClick} style={buttonStyle}>
      {text}
    </button>
  );
};

export default Button;
