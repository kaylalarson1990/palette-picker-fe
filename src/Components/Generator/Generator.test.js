import React from 'react';
import { Generator } from './Generator';
import { shallow } from 'enzyme';
import "../../../setupTests";

describe("Generator", () => {
    let wrapper, instance;
    beforeEach(() => {
        wrapper = shallow(<Generator />);
        instance = wrapper.instance()
    })

    it('should match the snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    })
})