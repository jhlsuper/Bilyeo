import React from "react";
import axios from "axios";

class bgDetailView extends React.Component {
  state = {
    bg_post: {},
  };

  componentDidMount() {
    const bg_id = this.props.match.params.bg_id;
    axios.get("http://127.0.0.1:8000/api/bg/" + String(bg_id)).then((res) => {
      this.setState({
        bg_post: res.data,
      });
    });
  }

  render() {
    return (
      <div className="bgDetail">
        <h1>{this.state.bg_post.title}</h1>
        <br />
        <h3>{this.state.bg_post.id}</h3>
        <h2>{this.state.bg_post.content}</h2>
        <p>{this.state.bg_post.image}</p>

      </div>
    );
  }
}

export default bgDetailView;