import React from "react";
import { Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import bjInputForm from "./components/bjInputForm";
const BaseRouter = () => (
  <div>
    <Route path="/login" component={LoginForm} />

    <Route path="/signup" component={SignupForm} />
    <Route path="/home" component={bjInputForm} />
  </div>
);

export default BaseRouter;
