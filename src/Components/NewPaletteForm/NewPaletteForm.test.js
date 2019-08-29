import React from "react";
import { shallow } from "enzyme";
import { NewPaletteForm, mapStateToProps } from "./NewPaletteForm";
import "../../../setupTests";

describe("NewPaletteForm", () => {
  let wrapper, instance, props;
  beforeEach(() => {
    props = {
      projects: [{ project_name: "Test Project" }]
    };
    wrapper = shallow(<NewPaletteForm {...props} />);
    instance = wrapper.instance();
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it.skip("should be called on input change", () => {
    const mockEvent = {
      target: { name: "palette-name", value: "Test Palette" }
    };
    instance.handleChange = jest.fn();
    wrapper.find(".palette-input-name").simulate("change", mockEvent);
    expect(wrapper.state("palette_name")).toEqual("Test Palette");
  });

  it.skip("should call handleSubmit when save button is clicked", () => {
    const mockEvent = { preventDefault: jest.fn() };
    instance.handleSubmit = jest.fn();

    wrapper.find(".palette-submit").simulate("click", mockEvent);
    expect(instance.handleSubmit).toHaveBeenCalledWith(mockEvent);
  });

  it.skip("should post a new project when handleSubmit is called", () => {
    const mockName = "Dream House";
    instance.postProject = jest.fn();

    instance.postProject(mockName);
    expect(instance.postProject).toHaveBeenCalledWith(mockName);
  });
});

describe("mapStateToProps", () => {
  it("should return an object with a palettes array", () => {
    const mockState = {
      palettes: []
    };
    const expected = {
      palettes: []
    };
    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps).toEqual(expected);
  });
});
