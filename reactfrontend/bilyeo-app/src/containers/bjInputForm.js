import React, { Component } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button'
import './bjInputForm.scss';


class bjInputForm extends Component {

  state = {
    user_id: '2', 
    bj_title: '',
    bj_content: '',
    views: 0
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    let form_data = new FormData();
    form_data.append('bj_title', this.state.bj_title);
    form_data.append('bj_content', this.state.bj_content);
    const sendPostRequest = async () => {
      try {
          const res = await  axios({
            method: 'post', 
            url: 'http://127.0.0.1:8000/api/bj/create',
            data: form_data,
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
          })          
          console.log(res.data);

      } catch (err) {
          console.error(err.response);
        }
      };


      sendPostRequest();

    }

  render() {
    return (
      <div className="bjInput">
        <h1>빌리고 싶은 물건을 등록하세요!</h1>
        <br /> <br />
        <div className="inputForm">
        <form onSubmit={this.handleSubmit}>
          <p>
            <input type="text" style={{width: 1000, height: 50}} placeholder="제목"
            name='bj_title' value={this.state.bj_title} onChange={this.handleChange} required/>
          </p>
          <br />
          <p>
            <textarea type="textarea" style={{width: 1000, height: 300}} placeholder="설명"
            name='bj_content' value={this.state.bj_content} onChange={this.handleChange} required/>
          </p>
          <br />
          <Button  type="submit" variant="dark"  block>빌려줘 등록하기</Button>
          <br /> <br /> <br /> 
        </form>
        </div>
      </div>
    );
  }
}

export default bjInputForm;