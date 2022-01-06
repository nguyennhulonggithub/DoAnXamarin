import { combineReducers } from "redux";
import SetHeight from "./SetHeight";
import SetResume from "./SetResume";
const allReducer = combineReducers({
  height: SetHeight,
  resume: SetResume,
});
export default allReducer;
