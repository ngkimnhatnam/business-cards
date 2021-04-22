// Dependencies import
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

// Components import
import CardInDetails from "../components/cards/CardInDetails";

const DetailsPage = () => {
  const detailPageStyle = {
    width: "700px",
    border: "5px solid #485696",
    margin: "auto",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    backgroundColor: "#485696",
  };
  const id = useParams().id;

  const [profile, setProfile] = useState([]);
  useEffect(() => {
    axios
      .get(`https://dummy.restapiexample.com/api/v1/employee/${id}`)
      .then((response) => setProfile(response.data.data))
      .catch((e) => console.log("Error while fetching data", e));
  }, [id]);

  return (
    <div style={detailPageStyle}>
      <CardInDetails
        name={profile.employee_name}
        age={profile.employee_age}
        salary={profile.employee_salary}
      />
    </div>
  );
};

export default DetailsPage;
