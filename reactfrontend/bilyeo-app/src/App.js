import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import BaseRouter from "./routes";
<<<<<<< HEAD
import Layout from "./containers/Layout";

=======
>>>>>>> a16432b7b1d0c765dd40af09ccf96596ffa26653

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
<<<<<<< HEAD
          <Layout>
            <BaseRouter />
          </Layout>
=======
          <BaseRouter />
>>>>>>> a16432b7b1d0c765dd40af09ccf96596ffa26653
        </Router>
      </div>
    );
  }
}

export default App;
