export const colorsReducer = (state = [], action) => {
  switch (action.type) {
    case "GATHER_COLORS":
      return action.colors;

    default:
      return state;
  }
};
