import React, { Component } from "react";

export default class LoginForm extends Component {
  render() {
    return (
      <form className="my-form">
        <h3>Sign In</h3>

        <div className="form-group">
          <label>ID</label>
          <input type="ID" className="form-control" placeholder="ID" />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        <div className="form-group">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <button type="submit" className="btn btn-primary btn-block">
          Submit
        </button>
        <p className="forgot-password text-right">
          <a href="/signup">Not a member?</a>
        </p>
      </form>
    );
  }
}
