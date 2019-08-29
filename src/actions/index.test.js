import * as actions from "./index";

describe("actions", () => {
  let mockProject, mockPalettes;
  beforeEach(() => {
    mockProject = [
      {
        id: 13,
        project_name: "Test Project"
      }
    ];

    mockPalettes = [
      {
        id: 1,
        palette_name: "Kitchen Colors",
        color1: "White",
        color2: "Teal",
        color3: "Blue",
        color4: "Green",
        color5: "Magenta",
        project_id: 13
      },
      {
        id: 2,
        palette_name: "Bathroom Colors",
        color1: "White",
        color2: "Silver",
        color3: "Green",
        color4: "White",
        color5: "Purple",
        project_id: 13
      }
    ];
  });
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

  it("should have a type of SAVE_PROJECT", () => {
    const project = mockProject;
    const expected = {
      type: "SAVE_PROJECT",
      project
    };
    const result = actions.saveProject(project);
    expect(result).toEqual(expected);
  });

  it("should have a type of SAVE_PALETTE", () => {
    const palette = mockPalettes;
    const expected = {
      type: "SAVE_PALETTE",
      palette
    };
    const result = actions.savePalette(palette);
    expect(result).toEqual(expected);
  });

  it("should have a type of ADD_PALETTE", () => {
    const newPalette = "New Palette";
    const expected = {
      type: "ADD_PALETTE",
      newPalette
    };
    const result = actions.addPalette(newPalette);
    expect(result).toEqual(expected);
  });

  it("should have a type of ADD_PROJECT", () => {
    const newProject = "New Project";
    const expected = {
      type: "ADD_PROJECT",
      newProject
    };
    const result = actions.addProject(newProject);
    expect(result).toEqual(expected);
  });

  it("should have a type of DELETE_PROJECT", () => {
    const id = 1;
    const expected = {
      type: "DELETE_PROJECT",
      id
    };
    const result = actions.deleteProject(id);

    expect(result).toEqual(expected);
  });

  it("should have a type of DELETE_PALETTE", () => {
    const id = 1;
    const expected = {
      type: "DELETE_PALETTE",
      id
    };
    const result = actions.deletePalette(id);

    expect(result).toEqual(expected);
  });
});
