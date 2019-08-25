import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount } from "enzyme";
import "../../../setupTests";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

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