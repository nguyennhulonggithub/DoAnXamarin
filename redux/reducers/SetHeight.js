export default function SetHeight(state = 0, action) {
  switch (action.type) {
    case "SET_HEIGHT":
      return action.data;
    default:
      return state;
  }
}
