export const gatherProjects = projects => ({
  type: "GATHER_PROJECTS",
  projects
});

export const gatherPalettes = palettes => ({
  type: "GATHER_PALETTES",
  palettes
});

export const saveProject = project => ({
  type: "SAVE_PROJECT",
  project
});

export const savePalette = palette => ({
  type: "SAVE_PALETTE",
  palette
});

export const addProject = newProject => ({
  type: "ADD_PROJECT",
  newProject
});

export const addPalette = newPalette => ({
  type: "ADD_PALETTE",
  newPalette
});

export const deleteProject = id => ({
  type: "DELETE_PROJECT",
  id
});

export const deletePalette = id => ({
  type: "DELETE_PALETTE",
  id
});
