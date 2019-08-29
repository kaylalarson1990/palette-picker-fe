import React from "react";
import { shallow } from "enzyme";
import { Projects, mapDispatchToProps, mapStateToProps } from "./Projects";
import { gatherPalettes, gatherProjects } from "../../actions/index";
import "../../../setupTests";

describe("Projects", () => {
  let wrapper, instance, props;
  beforeEach(() => {
    props = {
      palettes: [
        {
          palette_name: "Test Palette",
          c1: "Red",
          c2: "Blue",
          c3: "Green",
          c4: "Yellow",
          c5: "White",
          id: 1
        }
      ]
    };
    wrapper = shallow(<Projects {...props} />);
    instance = wrapper.instance();
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should dispatch gatherPalettes when delete is clicked", () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = gatherPalettes({
      id: 2
    });

    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.gatherPalettes({
      id: 2
    });

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it("should dispatch gatherProjects when delete is clicked", () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = gatherProjects({
      id: 2
    });

    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.gatherProjects({
      id: 2
    });

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});

describe("mapStateToProps", () => {
  it("should return projects, palettes, and error from store", () => {
    const mockState = {
      palettes: [{ palette_name: "Spring Fling" }]
    };

    const expected = {
      palettes: [{ palette_name: "Spring Fling" }]
    };

    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps).toEqual(expected);
  });
});

describe("mapDispatchToProps", () => {
  let mockDispatch;

  beforeEach(() => {
    mockDispatch = jest.fn();
  });

  it("should dispatch gatherProjects when handleSubmit is called", () => {
    const actionToDispatch = gatherProjects({
      projects: { project_name: "Test" }
    });

    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.gatherProjects({
      projects: { project_name: "Test" }
    });

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });

  it("should dispatch gatherPalettes when handleSubmit is called", () => {
    const actionToDispatch = gatherPalettes({
      palettes: { palette_name: "Test" }
    });

    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.gatherPalettes({
      palettes: { palette_name: "Test" }
    });

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});
