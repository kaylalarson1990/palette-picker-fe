import React from 'react';
import { App, mapDispatchToProps } from './App';
import { shallow } from "enzyme";
import { gatherPalettes } from '../../actions/index'
import "../../../setupTests";

describe("App", () => {
  let wrapper, instance, mockFunc;

  beforeEach(() => {
    wrapper = shallow(<App />);
    instance = wrapper.instance();
    mockFunc = jest.fn();
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
})

describe("mapDispatchToProps", () => {
  it("calls dispatch with a gatherPalettes action", () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = gatherPalettes("Test Palette");
    const mappedDispatch = mapDispatchToProps(mockDispatch);
    mappedDispatch.gatherPalettes("Test Palette");
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});