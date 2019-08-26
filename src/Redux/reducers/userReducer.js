const initialState = {
  id: "",
  username: "",
  email: "",
  first_name: "",
  last_name: "",
  full_name: "",
  token: "",
  adventures: [],
  donation_adventures: [],
  donations: []
};

const userReducer = (state = initialState, action) => {
  let userObj = action.payload;
  switch (action.type) {
    case "CREATE_USER":
      return {
        ...state,
        id: userObj.id,
        username: userObj.username,
        email: userObj.email,
        first_name: userObj.first_name,
        last_name: userObj.last_name,
        full_name: userObj.full_name,
        adventures: userObj.adventures,
        donation_adventures: userObj.donation_adventures,
        donations: userObj.donations
      };

    case "LOAD_USER":
      // let userObj = action.payload

      return {
        ...state,
        id: userObj.id,
        username: userObj.username,
        email: userObj.email,
        first_name: userObj.first_name,
        last_name: userObj.last_name,
        full_name: userObj.full_name,
        adventures: userObj.adventures,
        donation_adventures: userObj.donation_adventures,
        donations: userObj.donations
      };

    case "LOGOUT_USER":
      localStorage.clear();
      return {
        ...state,
        id: "",
        username: "",
        email: "",
        first_name: "",
        last_name: "",
        full_name: "",
        token: "",
        adventures: [],
        donation_adventures: [],
        donations: []
      };

    case "LOGIN_USER":
      return {
        ...state,
        id: userObj.id,
        username: userObj.username,
        email: userObj.email,
        first_name: userObj.first_name,
        last_name: userObj.last_name,
        full_name: userObj.full_name,
        adventures: userObj.adventures,
        donation_adventures: userObj.donation_adventures,
        donations: userObj.donations
      };
    case "NEW_ADVENTURE":
      let newAdventure = action.payload;
      let addedAdv = [...state.adventures, newAdventure];
      return { ...state, adventures: addedAdv };

    case "NEW_DONATION":
      let newDonation = action.payload;
      let addedDon = [newDonation, ...state.donations];
      return { ...state, donations: addedDon };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.payload
      };

    default:
      return state;
  }
};

export default userReducer;
