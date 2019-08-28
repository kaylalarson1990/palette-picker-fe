import React from "react";
import { shallow } from "enzyme";
import { gatherProjects } from "../../actions/index";
import {
  NewProjectForm,
  mapStateToProps,
  mapDispatchToProps
} from "./NewProjectForm";
import "../../../setupTests";

describe("NewProjectForm", () => {
  let wrapper, instance;
  beforeEach(() => {
    wrapper = shallow(<NewProjectForm />);
    instance = wrapper.instance();
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe("mapStateToProps", () => {
  it("should return an object with a projects array", () => {
    const mockState = {
      projects: "Test Project",
      type: "GATHER_PROJECTS"
    };
    const expected = {
      projects: "Test Project"
    };
    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps).toEqual(expected);
  });
});

describe("mapDispatchToProps", () => {
  it("calls dispatch with a gatherProjects action", () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = gatherProjects("Test Project");
    const mappedDispatch = mapDispatchToProps(mockDispatch);
    mappedDispatch.gatherProjects("Test Project");
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});
