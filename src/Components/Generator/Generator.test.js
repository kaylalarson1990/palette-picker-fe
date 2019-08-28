import React from "react";
import { Generator, mapDispatchToProps } from "./Generator";
import { gatherPalettes } from "../../actions/index";
import { shallow } from "enzyme";
import "../../../setupTests";

describe("Generator", () => {
  let wrapper, instance;
  beforeEach(() => {
    wrapper = shallow(<Generator />);
    instance = wrapper.instance();
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe("mapDispatchToProps", () => {
  it("calls dispatch with a gatherPalettes action", () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = gatherPalettes("Test Project");
    const mappedDispatch = mapDispatchToProps(mockDispatch);
    mappedDispatch.gatherPalettes("Test Project");
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});
