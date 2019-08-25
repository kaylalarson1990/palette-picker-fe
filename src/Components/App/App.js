import React, { Component } from "react";
import Generator from "../Generator/Generator";
import "./App.css";

class App extends Component {
  constructor() {
    super() 
      this.state = {
        projects: []
      }
  }

  componentDidMount() {
    return fetch(process.env.REACT_APP_BACKEND_URL + '/api/v1/projects')
      .then(res => res.json())
      .then(data => this.setState({ projects: data }))
      .catch(error => Error("Error fetching projects"));
  }
  
  render() {
    return (
      <div className="App">
        <Generator />
      </div>
    );
  }
}

export default App;
