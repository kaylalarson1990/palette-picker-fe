export const projectsReducer = (state = [], action) => {
  switch (action.type) {
    case "GATHER_PROJECTS":
      return action.projects;
    default:
      return state;
  }
};
