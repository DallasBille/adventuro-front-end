const initialState = {
  expanded: false
};

const toggleReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_ADVENTURE":
      return { ...state, expanded: action.payload };

    default:
      return state;
  }
};
export default toggleReducer;
