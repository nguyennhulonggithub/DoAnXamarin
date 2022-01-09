import { combineReducers } from "redux";
import IdUser from "./IdUser";
import Purchase from "./Purchase";
import SetHeight from "./SetHeight";
import SetResume from "./SetResume";
import UserLog from "./UserLog";
const allReducer = combineReducers({
  height: SetHeight,
  resume: SetResume,
  userlog: UserLog,
  idUser: IdUser,
  purchase: Purchase,
});
export default allReducer;
