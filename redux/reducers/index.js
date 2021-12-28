import { combineReducers } from "redux";
import SetHeight from "./SetHeight";
const allReducer = combineReducers({
  height: SetHeight,
});
export default allReducer;
