import React from "react";

const Avatar = ({ initial }) => {
  const avatarStyle = {
    color: "#485696",
    fontStyle: "italic",
    fontSize: 24,
    border: "2px solid #485696",
    borderRadius: 20,
    textAlign: "center",
    margin: "0px 40%",
  };
  return <div style={avatarStyle}>{initial}</div>;
};

export default Avatar;
