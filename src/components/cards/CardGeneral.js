// Dependencies import
import React from "react";

// Components import
import Avatar from "../generics/Avatar";
import Button from "../generics/Button";
import Name from "../generics/Name";

const Card = ({ id, name }) => {
  const cardStyle = {
    border: "1px solid #E7E7E7",
    borderRadius: 2,
    width: "45%",
    display: "flex",
    flexDirection: "column",
    flexWrap: "no-wrap",
    justifyContent: "center",
    margin: "5% 2% 5% 2%",
    padding: "10% 0px 10% 0px",
    backgroundColor: "#E7E7E7",
  };

  return (
    <div style={cardStyle}>
      <Avatar initial={name.slice(0, 1)} />
      <Name text={name} />
      <Button text="More details" id={id} />
    </div>
  );
};

export default Card;
