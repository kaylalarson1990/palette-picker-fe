import React, { Component } from "react";
import Generator from "../Generator/Generator";
import ProjectContainer from "../ProjectContainer/ProjectContainer"
import "./App.css";
import { fetchAllProjects, fetchAllPalettes } from "../../apiCalls";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      palettes: []
    };
  }

  componentDidMount() {
    // fetchAllProjects().then(data => this.setState({ projects: data }));
    fetchAllPalettes().then(data => this.setState({ palettes: data }));
  }

  render() {
    return (
      <div className="App">
        <Generator />
        <ProjectContainer />
      </div>
    );
  }
}

export default App;
