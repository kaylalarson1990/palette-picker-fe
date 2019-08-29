import { combineReducers } from "redux";
import { projectsReducer } from "./projectsReducer";
import { palettesReducer } from "./palettesReducer";

const rootReducer = combineReducers({
  projects: projectsReducer,
  palettes: palettesReducer
});

export default rootReducer;
