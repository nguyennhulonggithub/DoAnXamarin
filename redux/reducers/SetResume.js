export default function SetResume(state = [], action) {
  switch (action.type) {
    case "SET_RESUME":
      return 1;
    default:
      return 0;
  }
}
