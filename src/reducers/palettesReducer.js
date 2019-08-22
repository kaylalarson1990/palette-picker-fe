export const palettesReducer = (state = [], action) => {
  switch (action.type) {
    case 'GATHER_PALETTES':
      return action.palettes
    case 'GATHER_PALETTE':
      return action.id
    default:
      return state
  }
}