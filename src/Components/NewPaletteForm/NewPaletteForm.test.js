import React from 'react';
import { shallow } from 'enzyme';
import { NewPaletteForm } from './NewPaletteForm';
import "../../../setupTests";

describe("NewPaletteForm", () => {
    let wrapper, instance;
    beforeEach(() => {
        wrapper = shallow(<NewPaletteForm />)
        instance = wrapper.instance()
    })

    it('should match the snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    })
})