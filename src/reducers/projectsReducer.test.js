import { projectsReducer } from "./projectsReducer.js";

describe("projectsReducer", () => {
  it("should return the initial state", () => {
    const expected = [];
    const result = projectsReducer(undefined, {});
    expect(result).toEqual(expected);
  });

  it("should set all palettes from state", () => {
    const action = {
      type: "GATHER_PROJECTS",
      projects: [
        {
          project_name: "Test Project"
        }
      ]
    };
    const expected = [
      {
        project_name: "Test Project"
      }
    ];
    const result = projectsReducer(undefined, action);
    expect(result).toEqual(expected);
  });
});
