export default function IdUser(state = 0, action) {
  switch (action.type) {
    case "UPDATE_ID":
      return action.data;

    default:
      return state;
  }
}
