import React from 'react';
import App from './App';
import { shallow } from "enzyme";
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