// Dependencies import
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

// Components import
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailPage";

const App = () => {
  const [profiles, setProfiles] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummy.restapiexample.com/api/v1/employees")
      .then((response) => setProfiles(response.data.data))
      .catch((e) => console.log("Error while fetching data", e));
  }, []);

  return (
    <div>
      <Router>
        <Switch>
          <Route path="/employees/:id">
            <DetailsPage />
          </Route>
          <Route path="/">
            <HomePage data={profiles} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
