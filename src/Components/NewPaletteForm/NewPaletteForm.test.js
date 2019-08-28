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

  it("should be called on input change", () => {
    const mockEvent = {
      target: { name: "palette-name", value: "Test Palette" }
    };
    instance.handleChange() = jest.fn();
    wrapper.find(".palette-input-name").simulate("change", mockEvent);
    expect(wrapper.state("palette_name")).toEqual("Test Palette");
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
