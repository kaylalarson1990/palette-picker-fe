export const palettesReducer = (state = [], action) => {
  switch (action.type) {
    case "GATHER_PALETTES":
      return action.palettes;
    default:
      return state;
  }
};
