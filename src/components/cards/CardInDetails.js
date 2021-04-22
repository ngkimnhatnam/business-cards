// Dependencies import
import React from "react";

// Components import
import Avatar from "../generics/Avatar";
import Age from "../generics/Age";
import Name from "../generics/Name";
import Salary from "../generics/Salary";

const CardInDetails = ({ name = "", age = 0, salary = 0 }) => {
  const cardStyle = {
    border: "1px solid #E7E7E7",
    borderRadius: 2,
    width: "65%",
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
      <Age age={age} />
      <Salary salary={salary} />
    </div>
  );
};

export default CardInDetails;
