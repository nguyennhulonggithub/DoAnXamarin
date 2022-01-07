import { combineReducers } from "redux";
import IdUser from "./IdUser";
import SetHeight from "./SetHeight";
import SetResume from "./SetResume";
import UserLog from "./UserLog";
const allReducer = combineReducers({
  height: SetHeight,
  resume: SetResume,
  userlog: UserLog,
  idUser: IdUser,
});
export default allReducer;
