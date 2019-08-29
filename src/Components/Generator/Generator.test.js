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

describe("generateHexColors", () => {
  it("should call generateHexColors when Generate New Colors button clicked", () => {
    const wrapper = shallow(<Generator />);
    const instance = wrapper.instance();

    instance.generateHexColors = jest.fn();
    wrapper.find(".generate-palette-btn").simulate("click", {});
    instance.generateHexColors();
    expect(instance.generateHexColors).toBeCalled();
  });
});

describe("lockAHexColor", () => {
  it("should call lockAHexColor when Generate New Colors button clicked", () => {
    const wrapper = shallow(<Generator />);
    const instance = wrapper.instance();

    instance.lockAHexColor = jest.fn();
    wrapper.find(".color-lock1").simulate("click", {});
    expect(instance.lockAHexColor).toBeCalled();
  });

  it("should call lockAHexColor when Generate New Colors button clicked", () => {
    const wrapper = shallow(<Generator />);
    const instance = wrapper.instance();

    instance.lockAHexColor = jest.fn();
    wrapper.find(".color-lock2").simulate("click", {});
    expect(instance.lockAHexColor).toBeCalled();
  });

  it("should call lockAHexColor when Generate New Colors button clicked", () => {
    const wrapper = shallow(<Generator />);
    const instance = wrapper.instance();

    instance.lockAHexColor = jest.fn();
    wrapper.find(".color-lock3").simulate("click", {});
    expect(instance.lockAHexColor).toBeCalled();
  });

  it("should call lockAHexColor when Generate New Colors button clicked", () => {
    const wrapper = shallow(<Generator />);
    const instance = wrapper.instance();

    instance.lockAHexColor = jest.fn();
    wrapper.find(".color-lock4").simulate("click", {});
    expect(instance.lockAHexColor).toBeCalled();
  });

  it("should call lockAHexColor when Generate New Colors button clicked", () => {
    const wrapper = shallow(<Generator />);
    const instance = wrapper.instance();

    instance.lockAHexColor = jest.fn();
    wrapper.find(".color-lock5").simulate("click", {});
    expect(instance.lockAHexColor).toBeCalled();
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
