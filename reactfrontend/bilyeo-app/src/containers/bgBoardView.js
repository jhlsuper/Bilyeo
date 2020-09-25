import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class bgBoardView extends React.Component {
  state = {
    bg_board: [
    ],
  };

  componentDidMount() {
    axios.get("http://127.0.0.1:8000/api/bg/").then((res) => {
      this.setState({
        bg_board: res.data,
      });
    });
  }

  render() {
    const bg_id = this.props.match.params.bg_id;
    return (
      <div>
        {this.state.bg_board.map((item) => (
          <div key={item.id}>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to={{ pathname: "/" + bg_id }}
            >
              <h1>title: {item.title}</h1>
            </Link>
            <h3>id: {item.id}</h3>
            <span>content: {item.content}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default bgBoardView;