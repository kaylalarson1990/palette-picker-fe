import { palettesReducer } from "./palettesReducer.js";

describe("palettesReducer", () => {
  it("should return the initial state", () => {
    const expected = [];
    const result = palettesReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it("should set all palettes from state", () => {
    const action = {
      type: "GATHER_PALETTES",
      palettes: [{
          palette_name: 'Test Palette',
          c1: 'Blue',
          c2: 'Pink',
          c3: 'Purple',
          c4: 'Green',
          c5: 'Red',
          proj_name: 'Test Project'
      }]
    };
    const expected = [{
        palette_name: 'Test Palette',
        c1: 'Blue',
        c2: 'Pink',
        c3: 'Purple',
        c4: 'Green',
        c5: 'Red',
        proj_name: 'Test Project'
    }];
    const result = palettesReducer(undefined, action);
    expect(result).toEqual(expected);
  });

//   it("should set one palette from state", () => {
//     const action = {
//       type: "GATHER_PALETTE",
//       palettes: [{
//           id: 1
//       }]
//     };
//     const expected = [{
//         id: 1
//     }];
//     const result = palettesReducer(undefined, action);
//     expect(result).toEqual(expected);
//   });
});