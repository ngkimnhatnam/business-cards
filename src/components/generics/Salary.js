// Dependencies import
import React from "react";

const Salary = ({ salary }) => {
  const salaryStyle = {
    fontSize: 30,
    textAlign: "center",
    color: "#F24C00",
  };
  return (
    <div style={salaryStyle}>
      Current annual paygrade: {salary}
      <strong>€</strong>
    </div>
  );
};

export default Salary;
