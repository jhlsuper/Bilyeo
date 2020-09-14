import React from "react";
import { Route } from "react-router-dom";
import SaveButton from "./components/SaveButton";

const BaseRouter = () => (
  <div>
    <Route exact path="/saveButton" component={SaveButton} />
  </div>
);

export default BaseRouter;
