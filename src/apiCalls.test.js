import {
  fetchAllProjects,
  fetchAllPalettes,
  postProject,
  postPalette,
  patchProject,
  patchPalette,
  deleteProject,
  deletePalette
} from "./apiCalls";

describe("fetchAllProjects", () => {
  let mockProject, mockPalettes, mockData;
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

    mockData = [
      {
        id: 13,
        project_name: "Test Project",
        palettes: [
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
        ]
      }
    ];

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockData)
      });
    });
  });

  it("should be called with the correct params", () => {
    const expected = ["undefined/api/v1/projects"];

    fetchAllProjects(mockData);
    expect(window.fetch).toHaveBeenCalledWith(...expected);
  });

  it("HAPPY: should return data with a parsed response", async () => {
    const mockProject1 = [
      {
        id: 13,
        project_name: "Test Project",
        palettes: [
          {
            color1: "White",
            color2: "Silver",
            color3: "Green",
            color4: "White",
            color5: "Purple",
            id: 2,
            palette_name: "Bathroom Colors",
            project_id: 13
          }
        ]
      }
    ];
    const result = await fetchAllProjects();
    console.log(result);
    expect(result).toEqual(mockProject1);
  });

  it("SAD: should return an error if the answer is not ok", () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });
    expect(fetchAllProjects()).rejects.toEqual(
      Error("Error fetching projects")
    );
  });
});

describe("fetchAllPalettes", () => {
  let mockProject, mockPalettes, mockData;
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

    mockData = [
      {
        id: 13,
        project_name: "Test Project",
        palettes: [
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
        ]
      }
    ];

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockData)
      });
    });
  });

  it("should be called with the correct params", () => {
    const expected = ["undefined/api/v1/palettes"];

    fetchAllPalettes(mockPalettes);
    expect(window.fetch).toHaveBeenCalledWith(...expected);
  });

  // it("HAPPY: should return with a parsed response", async () => {
  //   const result = await fetchOneProject();
  //   expect(result).toEqual(mockProject);
  // });

  // it("SAD: should return an error if the answer is not ok", () => {
  //   window.fetch = jest.fn().mockImplementation(() => {
  //     return Promise.resolve({
  //       ok: false
  //     });
  //   });
  //   expect(fetchOneProject()).rejects.toEqual(
  //     Error("Could not fetch project")
  //   );
  // });
});
