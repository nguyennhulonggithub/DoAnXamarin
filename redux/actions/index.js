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
