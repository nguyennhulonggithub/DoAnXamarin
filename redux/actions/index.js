export const SetHeightChapter = (value) => {
  return {
    type: "SET_HEIGHT",
    data: value,
  };
};
export const SetResumeReading = (data) => {
  return {
    type: "SET_RESUME",
    data: data,
  };
};
export const InitialResume = (data) => {
  return {
    type: "INITIAL_RESUME",
    data: data,
  };
};
export const Login = () => {
  return {
    type: "LOGIN",
  };
};
export const Logout = () => {
  return {
    type: "LOGOUT",
  };
};
export const SetIdUser = (data) => {
  return {
    type: "UPDATE_ID",
    data: data,
  };
};
