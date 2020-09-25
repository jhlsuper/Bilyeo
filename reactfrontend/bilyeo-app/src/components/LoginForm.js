import React, { Component } from "react";
import axios from "axios";
import APIKit, { setClientToken, SetClientToken } from "../api/APIKit";
const initialState = {
  ID: "",
  password: "",
  errors: {},
  isAuthorizred: false,
  isLoading: false,
  IDEntered: "",
  PWEntered: "",
  isIDValid: false,
  isPWValid: false,
};

export default class LoginForm extends Component {
  state = initialState;

  componentWillUnmount() {}

  onUserNameChane = (ID) => {
    this.setState({ ID });
  };

  onPasswordChange = (passord) => {
    this.setState({ passord });
  };

  onPressLogin() {
    const { ID, password } = this.state;
    const payload = { ID, password };
    console.log(payload);

    const onSuccess = ({ data }) => {
      //json web 토큰을 성공으로 바꾼다
      setClientToken(data.token);
      this.setState({ isLoading: false, isAuthorizred: true });
    };

    const onFailure = (error) => {
      console.log(error && error.reponse);
      this.setState({ errors: error.reponse.data, isLoading: false });
    };

    this.setState({ isLoading: true }); //이부분은 api 손봐야됨
    APIKit.post("/api-token-auth", payload).then(onSuccess).catch(onFailure);
  }
  validateID = (IDEntered) => {
    if (IDEntered.length > 5) {
      this.setState({
        isIDValid: true,
        IDEntered,
      });
    } else {
      this.setState({
        isIDValid: false,
        IDEntered,
      });
    }
  };

  validatePW = (PWEntered) => {
    if (PWEntered.length > 5) {
      this.setState({
        isPWValid: true,
        PWEntered,
      });
    } else {
      this.setState({
        isPWValid: false,
        PWEntered,
      });
    }
  };

  inputClassNameHelper = (boolean) => {
    switch (boolean) {
      case true:
        return "is-valid";
      case false:
        return "is-invalid";
      default:
        return "";
    }
  };

  isEnteredIDValid = () => {
    const { IDEntered, isIDValid } = this.state;

    if (IDEntered) return isIDValid;
  };
  isEnteredPWValid = () => {
    const { PWEntered, isPWValid } = this.state;

    if (PWEntered) return isPWValid;
  };

  inputClassNameHelper = (boolean) => {
    switch (boolean) {
      case true:
        return "is-valid";
      case false:
        return "is-invalid";
      default:
        return "";
    }
  };

  isEveryFieldValid = () => {
    const { isNameValid, isEmailValid } = this.state;
    return isNameValid && isEmailValid;
  };

  renderSubmitBtn = () => {
    //꺼지고 켜지는 로그인버튼 ^&^
    if (this.isEveryFieldValid()) {
      return (
        <button type="로그인" className="btn btn-primary btn-block">
          Submit
        </button>
      );
    }

    return (
      <button type="로그인" className="btn btn-primary btn-block" disabled>
        Submit
      </button>
    );
  };

  render() {
    return (
      <form className="my-form">
        <h3>Sign In</h3>
        <div className="form-group">
          <label for="inputID">ID</label>
          <input
            type="ID"
            onChange={this.handleIDChange}
            id="inputID"
            className={`form-control ${this.inputClassNameHelper(
              this.isEnteredIDValid()
            )}`}
            placeholder="ID"
            onChange={(e) => this.validateID(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label for="inputPW">Password</label>
          <input
            type="password"
            onChange={this.handlePWChange}
            id="inputPW"
            className={`form-control ${this.inputClassNameHelper(
              this.isEnteredPWValid()
            )}`}
            placeholder="Enter password"
            onChange={(e) => this.validatePW(e.target.value)}
            required
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
          {this.renderSubmitBtn()}
        </button>

        <p className="forgot-password text-right">
          <a href="/signup">Not a member?</a>
        </p>
      </form>
    );
  }
}
