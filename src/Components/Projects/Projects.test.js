import React from 'react';
import { shallow } from 'enzyme';
import { Projects } from './Projects';
import "../../../setupTests";

describe("Projects", () => {
    let wrapper, instance;
    beforeEach(() => {
        wrapper = shallow(<Projects />)
        instance = wrapper.instance()
    })

    it('should match the snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    })
})