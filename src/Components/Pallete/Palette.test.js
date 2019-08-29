import React from "react";
import { Palette, mapDispatchToProps } from "./Palette";
import { shallow } from "enzyme";
import { gatherPalettes } from "../../actions/index";
import "../../../setupTests";

describe("Projects", () => {
  let wrapper, instance, props;
  beforeEach(() => {
    props = {
      palettes: [
        {
          palette_name: "Test Palette",
          c1: "Red",
          c2: "Blue",
          c3: "Green",
          c4: "Yellow",
          c5: "White",
          id: 1
        }
      ]
    };
    wrapper = shallow(<Palette {...props} />);
    instance = wrapper.instance();
  });

  it("should match the snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe("mapDispatchToProps", () => {
  let mockDispatch;

  beforeEach(() => {
    mockDispatch = jest.fn();
  });

  it("should dispatch gatherPalettes when handleSubmit is called", () => {
    const actionToDispatch = gatherPalettes({
      palettes: { palette_name: "Test" }
    });

    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.gatherPalettes({
      palettes: { palette_name: "Test" }
    });

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});
