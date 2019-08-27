import React, { Component } from "react";
import Generator from "../Generator/Generator";
import ProjectContainer from "../ProjectContainer/ProjectContainer"
import "./App.css";
import { fetchAllProjects, fetchAllPalettes } from "../../apiCalls";

export class App extends Component {
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
        <ProjectContainer />
      </div>
    );
  }
}

// export const mapDispatchToProps = dispatch => ({
//   fetchAllProjects: () => dispatch(fetchAllProjects()),
//   fetchAllPalettes: () => dispatch(fetchAllPalettes())
// });

export default App;
