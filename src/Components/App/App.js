import React, { Component } from "react";
import Generator from "../Generator/Generator";
import "./App.css";
import { fetchAllProjects, fetchAllPalettes } from "../../apiCalls";

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
      palettes: []
    };
  }

  componentDidMount() {
    fetchAllProjects().then(data => this.setState({ projects: data }));
    fetchAllPalettes().then(data => this.setState({ palettes: data }));
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
