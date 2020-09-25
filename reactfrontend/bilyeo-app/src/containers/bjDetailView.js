import React from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button'
import './bjDetailView.scss';


class bjDetailView extends React.Component {
  state = {
    bj_post: {},
  };

  componentDidMount() {
    const bj_ID = this.props.match.params.bj_ID;
    axios.get("http://127.0.0.1:8000/api/bj/" + String(bj_ID)).then((res) => {
      this.setState({
        bj_post: res.data,
      });
    });
  }

  render() {
    return (
      <div className="Board">
        <div className="detail"> 
        <h1>{this.state.bj_post.bj_title}</h1>
        <br />
        <p>{this.state.bj_post.user_id}</p>
        <h2>{this.state.bj_post.bj_content}</h2>
        <br />
        </div>


      </div>
    );
  }
}

export default bjDetailView;