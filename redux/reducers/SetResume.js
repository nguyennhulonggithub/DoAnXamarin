import { getResume } from "../../InteractServer/ResumeSave";

export default function SetResume(state = [], action) {
  switch (action.type) {
    case "SET_RESUME":
      const data = state.slice();
      cur_data = action.data;

      for (let i = 0; i <= data.length; i++) {
        if (i == 5) {
          data.pop();
          data.unshift(cur_data);
          break;
        }
        if (i == data.length) {
          data.unshift(cur_data);
          break;
        }
        if (data[i].mangaTitle == cur_data.mangaTitle) {
          data.splice(i, 1);
          data.unshift(cur_data);
          break;
        }
      }

      return data;
    case "INITIAL_RESUME":
      return action.data.slice(0, 5);
    default:
      return state;
  }
}
