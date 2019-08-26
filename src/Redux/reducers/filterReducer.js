const initialState = {
  term: "All"
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_FILTER_TERM":
      return { ...state, term: action.payload };

    default:
      return state;
  }
};

export default filterReducer;
