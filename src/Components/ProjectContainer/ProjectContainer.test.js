import React from "react";
import { ProjectContainer } from "./ProjectContainer";
import { shallow } from "enzyme";
import "../../../setupTests";

describe("ProjectContainer", () => {
  let wrapper, instance, mockProject;
  beforeEach(() => {
    mockProject = [
      {
        id: 13,
        project_name: "Test Project"
      }
    ];
    wrapper = shallow(<ProjectContainer projects={mockProject} />);
    instance = wrapper.instance();
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
