import React, { Component } from "react";
import axios from "axios";

class bjInputForm extends Component {
  state = {
    user_id: "2",
    bj_title: "",
    bj_content: "",
    views: 0,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    let form_data = new FormData();
    form_data.append("bj_title", this.state.bj_title);
    form_data.append("bj_content", this.state.bj_content);
    const sendPostRequest = async () => {
      try {
        const res = await axios({
          method: "post",
          url: "http://127.0.0.1:8000/api/bj/create",
          data: form_data,
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        });
        console.log(res.data);
      } catch (err) {
        console.error(err.response);
      }
    };

    sendPostRequest();
  };

  render() {
    return (
      <div className="bjBoard">
        <form onSubmit={this.handleSubmit}>
          <p>
            <input
              type="text"
              placeholder="Title"
              name="bj_title"
              value={this.state.bj_title}
              onChange={this.handleChange}
              required
            />
          </p>
          <p>
            <input
              type="text"
              placeholder="Content"
              name="bj_content"
              value={this.state.bj_content}
              onChange={this.handleChange}
              required
            />
          </p>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default bjInputForm;
