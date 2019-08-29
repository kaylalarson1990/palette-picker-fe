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
  let mockData;
  beforeEach(() => {
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
    const expected = [
      "https://palette-picker-dk.herokuapp.com/api/v1/projects"
    ];

    fetchAllProjects(mockData);
    expect(window.fetch).toHaveBeenCalledWith(...expected);
  });

  it("HAPPY: should return data with a parsed response", async () => {
    const result = await fetchAllProjects();
    expect(result).toEqual(mockData);
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
  let mockPalettes, mockData;
  beforeEach(() => {
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
    const expected = [
      "https://palette-picker-dk.herokuapp.com/api/v1/palettes"
    ];

    fetchAllPalettes(mockPalettes);
    expect(window.fetch).toHaveBeenCalledWith(...expected);
  });

  it("HAPPY: should return with a parsed response", async () => {
    const result = await fetchAllPalettes();
    expect(result).toEqual(mockData);
  });

  it("SAD: should return an error if the answer is not ok", () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });
    expect(fetchAllPalettes()).rejects.toEqual(
      Error("Error fetching palettes")
    );
  });

  describe("postProject", () => {
    let mockData, mockResponse;
    beforeEach(() => {
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

      mockResponse = { id: [13] };

      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        });
      });
    });

    it("should be called with the correct params", () => {
      const expected = [
        "https://palette-picker-dk.herokuapp.com/api/v1/projects",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(mockData)
        }
      ];

      postProject(mockData);
      expect(window.fetch).toHaveBeenCalledWith(...expected);
    });

    it("HAPPY: should return with a parsed response", async () => {
      const result = await postProject(mockData);
      expect(result).toEqual(mockResponse);
    });

    it("SAD: should return an error if the answer is not ok", () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        });
      });
      expect(fetchAllPalettes()).rejects.toEqual(Error("Error adding project"));
    });
  });

  describe("postPalette", () => {
    let mockPalettes, mockData, mockResponse;
    beforeEach(() => {
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

      mockResponse = { id: [2] };

      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        });
      });
    });

    it("should be called with the correct params", () => {
      const expected = [
        "https://palette-picker-dk.herokuapp.com/api/v1/palettes",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(mockPalettes)
        }
      ];

      postPalette(mockPalettes);
      expect(window.fetch).toHaveBeenCalledWith(...expected);
    });

    it("HAPPY: should return with a parsed response", async () => {
      const result = await postPalette(mockPalettes);
      expect(result).toEqual(mockResponse);
    });

    it("SAD: should return an error if the answer is not ok", () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        });
      });
      expect(fetchAllPalettes()).rejects.toEqual(Error("Error adding palette"));
    });
  });

  describe("patchProject", () => {
    let mockData, mockResponse;
    beforeEach(() => {
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

      mockResponse = { project_name: "New Name" };

      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        });
      });
    });

    it("should be called with the correct params", () => {
      const expected = [
        "https://palette-picker-dk.herokuapp.com/api/v1/projects",
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(mockData)
        }
      ];

      patchProject(mockData);
      expect(window.fetch).toHaveBeenCalledWith(...expected);
    });

    it("HAPPY: should return a parsed response", async () => {
      const result = await patchProject(mockData);

      expect(result).toEqual(mockResponse);
    });

    it("SAD: should return an error if status is not ok", () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        });
      });

      expect(patchProject(mockData)).rejects.toEqual(
        Error("Error editing project")
      );
    });
  });

  describe("patchPalette", () => {
    let mockPalettes, mockResponse;
    beforeEach(() => {
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

      mockResponse = { palette_name: "New Name" };

      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse)
        });
      });
    });

    it("should be called with the correct params", () => {
      const expected = [
        "https://palette-picker-dk.herokuapp.com/api/v1/palettes",
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(mockPalettes)
        }
      ];

      patchPalette(mockPalettes);
      expect(window.fetch).toHaveBeenCalledWith(...expected);
    });

    it("HAPPY: should return a parsed response", async () => {
      const result = await patchPalette(mockPalettes);

      expect(result).toEqual(mockResponse);
    });

    it("SAD: should return an error if status is not ok", () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        });
      });

      expect(patchPalette(mockPalettes)).rejects.toEqual(
        Error("Error editing palette")
      );
    });
  });

  describe("deleteProject", () => {
    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true
        });
      });
    });
    it("should call fetch with correct data", () => {
      const expected = [
        "https://palette-picker-dk.herokuapp.com/api/v1/projects/undefined",
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json"
          }
        }
      ];

      deleteProject(
        "https://palette-picker-dk.herokuapp.com/api/v1/projects/undefined"
      );

      expect(window.fetch).toHaveBeenCalledWith(...expected);
    });

    it("SAD: should return an error if status is not ok", () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        });
      });

      expect(
        deleteProject(
          "https://palette-picker-dk.herokuapp.com/api/v1/projects/undefined"
        )
      ).rejects.toEqual(Error("Error deleting projects"));
    });
  });

  describe("deletePalette", () => {
    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true
        });
      });
    });
    it("should call fetch with correct data", () => {
      const expected = [
        "https://palette-picker-dk.herokuapp.com/api/v1/palettes/undefined",
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json"
          }
        }
      ];

      deletePalette(
        "https://palette-picker-dk.herokuapp.com/api/v1/palettes/undefined"
      );

      expect(window.fetch).toHaveBeenCalledWith(...expected);
    });

    it("SAD: should return an error if status is not ok", () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: false
        });
      });

      expect(
        deletePalette(
          "https://palette-picker-dk.herokuapp.com/api/v1/palettes/undefined"
        )
      ).rejects.toEqual(Error("Error deleting palettes"));
    });
  });
});
