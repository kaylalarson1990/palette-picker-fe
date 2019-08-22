export const gatherProjects = projects => ({
  type: 'GATHER_PROJECTS',
  projects
})

export const gatherPalettes = palettes => ({
  type: 'GATHER_PALETTES',
  palettes
})

export const gatherProject = id => ({
  type: 'GATHER_PROJECT',
  id
})

export const gatherPalette = id => ({
  type: 'GATHER_PALETTE',
  id
})