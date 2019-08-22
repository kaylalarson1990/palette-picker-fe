export const projectsReducer = (state = [], action) => {
  switch (action.type) {
    case 'GATHER_PROJECTS':
      return action.projects
    case 'GATHER_PROJECT':
      return action.id
    default:
      return state
  }
}