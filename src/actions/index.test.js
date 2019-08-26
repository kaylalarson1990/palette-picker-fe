import * as actions from "./index";

describe("actions", () => {
  it("should have a type of GATHER_PROJECTS", () => {
    const projects = { projects: [{ project_name: "Test Project" }] };
    const expectedAction = {
      type: "GATHER_PROJECTS",
      projects: projects
    };
    const result = actions.gatherProjects(projects);
    expect(result).toEqual(expectedAction);
  });

  it("should have a type of GATHER_PALETTES", () => {
    const palettes = {
      palettes: [
        {
          palette_name: "Test Palette",
          c1: "Blue",
          c2: "Pink",
          c3: "Purple",
          c4: "Green",
          c5: "Red",
          proj_name: "Test Project"
        }
      ]
    };
    const expectedAction = {
      type: "GATHER_PALETTES",
      palettes: palettes
    };
    const result = actions.gatherPalettes(palettes);
    expect(result).toEqual(expectedAction);
  });

//   it("should have a type of GATHER_PROJECT", () => {
//     const project = { id: [{ id: 1 }] };
//     const expectedAction = {
//       type: "GATHER_PROJECT",
//       projects: project
//     };
//     const result = actions.gatherProject(project);
//     expect(result).toEqual(expectedAction);
//   });
});
