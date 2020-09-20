import React, { Component } from "react";
import "./form.css";
export default class SignUp extends Component {
  state = {
    nameEntered: "",
    isNameValid: false,
    emailEntered: "",
    isEmailValid: false,
    phoneNumberEntered: "",
    isPhoneNumberValid: false,
  };
  validateName = (nameEntered) => {
    if (nameEntered.length > 1) {
      this.setState({
        isNameValid: true,
        nameEntered,
      });
    } else {
      this.setState({
        isNameValid: false,
        nameEntered,
      });
    }
  };
  isEnteredNameValid = () => {
    const { nameEntered, isNameValid } = this.state;

    if (nameEntered) return isNameValid;
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

  validateEmail = (emailEntered) => {
    const emailRegExp = /^[\w-]+(\.[\w-]+)*@([a-z0-9-]+(\.[a-z0-9-]+)*?\.[a-z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/;

    if (emailEntered.match(emailRegExp)) {
      this.setState({
        isEmailValid: true,
        emailEntered,
      });
    } else {
      this.setState({
        isEmailValid: false,
        emailEntered,
      });
    }
  };
  isEnteredEmailValid = () => {
    const { emailEntered, isEmailValid } = this.state;

    if (emailEntered) return isEmailValid;
  };
  validatePhoneNumber = (phoneNumberInput) => {
    const phoneNumberRegExp = /^\d{3}\d{3,4}\d{4}$/;

    if (phoneNumberInput.match(phoneNumberRegExp)) {
      this.setState({
        isPhoneNumberValid: true,
        phoneNumberEntered: phoneNumberInput,
      });
    } else {
      this.setState({
        isPhoneNumberValid: false,
        phoneNumberEntered: phoneNumberInput,
      });
    }
  };
  isEnteredPhoneNumberValid = () => {
    const { phoneNumberEntered, isPhoneNumberValid } = this.state;

    if (phoneNumberEntered) return isPhoneNumberValid;
  };

  isEveryFieldValid = () => {
    const { isNameValid, isEmailValid, isPhoneNumberValid } = this.state;
    return isNameValid && isEmailValid && isPhoneNumberValid;
  };

  renderSubmitBtn = () => {
    if (this.isEveryFieldValid()) {
      return (
        <button type="submit" className="btn btn-primary btn-block">
          Submit
        </button>
      );
    }

    return (
      <button type="submit" className="btn btn-primary btn-block" disabled>
        Submit
      </button>
    );
  };

  render() {
    return (
      <form className="my-form">
        <h3>Sign Up</h3>

        <div className="form-group">
          <label htmlFor="idInput">아이디</label>
          <input
            type="text"
            className="form-control"
            id="idInput"
            placeholder="아이디"
          />
        </div>

        <div className="form-group">
          <label htmlFor="nikname">닉네임</label>
          <input
            type="text"
            className="form-control"
            id="nicknameInput"
            placeholder="닉네임"
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">이름</label>
          <input
            type="text"
            className={`form-control ${this.inputClassNameHelper(
              this.isEnteredNameValid()
            )}`}
            id="nameInput"
            placeholder="홍길동"
            onChange={(e) => this.validateName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>이메일 주소</label>
          <input
            type="email"
            className={`form-control ${this.inputClassNameHelper(
              this.isEnteredEmailValid()
            )}`}
            id="emailInput"
            aria-describedby="emailHelp"
            placeholder="이메일"
            onChange={(e) => this.validateEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>비밀번호</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="비밀번호"
          />
        </div>
        <div className="form-group">
          <label>비밀번호 확인</label>
          <input
            type="password"
            className="form-control"
            id="passwordreInput"
            placeholder="비밀번호 확인"
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumberInput">휴대폰 번호</label>
          <input
            type="text"
            className={`form-control ${this.inputClassNameHelper(
              this.isEnteredPhoneNumberValid()
            )}`}
            id="phoneNumberInput"
            placeholder="- 빼고 입력"
            onChange={(e) => this.validatePhoneNumber(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary btn-block">
          {this.renderSubmitBtn()}
        </button>
        <p className="signin">
          Already registered <a href="/login">sign in?</a>
        </p>
      </form>
    );
  }
}
