// Dependencies import
import React from "react";

// Components import
import CardGeneral from "../components/cards/CardGeneral";

const HomePage = ({ data }) => {
  const homePageStyle = {
    width: "900px",
    border: "5px solid #485696",
    margin: "auto",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    backgroundColor: "#485696",
  };

  return (
    <div style={homePageStyle}>
      {data.map((profile) => (
        <CardGeneral
          key={profile.id}
          name={profile.employee_name}
          id={profile.id}
        ></CardGeneral>
      ))}
    </div>
  );
};

export default HomePage;
