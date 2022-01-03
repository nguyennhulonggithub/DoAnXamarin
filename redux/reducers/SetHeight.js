export default function SetHeight(state = 500, action) {
  switch (action.type) {
    case "SET_HEIGHT":
      return action.data;
    default:
      return state;
  }
}
