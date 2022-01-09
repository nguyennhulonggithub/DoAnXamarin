export default function Purchase(state = [], action) {
  switch (action.type) {
    case "PURCHASE":
      return action.data;
    case "PUSH_PURCHASE":
      const temp = state.slice();
      temp.push(action.data);

      return temp;

    default:
      return state;
  }
}
