export const initialState = { user: null, track: "" };

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TRACK":
      return {
        ...state,
        track: action.track,
      };

    default:
      return state;
  }
};

export default reducer;
