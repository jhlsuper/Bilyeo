import React from "react";
import { Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";

const BaseRouter = () => (
  <div>
    <Route path="/login" component={LoginForm} />
    <Route path="/signup" component={SignupForm} />
  </div>
);

export default BaseRouter;
