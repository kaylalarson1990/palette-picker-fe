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

describe("palette lock (lockAHexColor)", () => {
  let wrapper, instance;
  beforeEach(() => {
    wrapper = shallow(<Generator />);
    instance = wrapper.instance();
  });
  it("should update the locked colors in state", () => {
    expect(wrapper.state("isLocked")).toEqual([
      false,
      false,
      false,
      false,
      false
    ]);
    instance.lockAHexColor(0);
    expect(wrapper.state("isLocked")).toEqual([
      true,
      false,
      false,
      false,
      false
    ]);
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
