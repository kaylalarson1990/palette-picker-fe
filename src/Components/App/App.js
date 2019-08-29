import React, { Component } from "react";
import Generator from "../Generator/Generator";
import ProjectContainer from "../ProjectContainer/ProjectContainer";
import { connect } from "react-redux";
import "./App.css";
import { fetchAllPalettes } from "../../apiCalls";
import { gatherPalettes } from "../../actions";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      palettes: []
    };
  }

  componentDidMount() {
    fetchAllPalettes().then(data => this.props.gatherPalettes(data));
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

export const mapDispatchToProps = dispatch => ({
  gatherPalettes: data => dispatch(gatherPalettes(data))
});

export default connect(
  null,
  mapDispatchToProps
)(App);
