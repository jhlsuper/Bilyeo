import React from "react";
import { Route } from "react-router-dom";
import bilyeoMainView from "./containers/bilyeoMainView";
import bgBoardView from "./containers/bgBoardView";
import bgDetailView from "./containers/bgDetailView";
import bgInputForm from "./containers/bgInputForm";
import bjBoardView from "./containers/bjBoardView";
import bjDetailView from "./containers/bjDetailView";
import bjInputForm from "./containers/bjInputForm";
import LoginForm from "./containers/LoginForm";
import SignupForm from "./containers/SignupForm";
const BaseRouter = () => (
  <div>
    <Route exact path="/" component={bilyeoMainView} />
    <Route exact path="/bg" component={bgBoardView} />
    <Route exact path="/bg/:bg_id" component={bgDetailView} />
    <Route exact path="/bg/create" component={bgInputForm} />
    <Route exact path="/bj" component={bjBoardView} />
    <Route exact path="/bj/:bj_ID" component={bjDetailView} />
    <Route exact path="/bj/create" component={bjInputForm} />
    <Route exact path="/login" component={LoginForm} />
    <Route exact path="/Signup" component={SignupForm} />
  </div>
);

export default BaseRouter;
