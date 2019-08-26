export const createUserAction = user => ({
  type: "CREATE_USER",
  payload: user
});
export const logOutUserAction = () => ({
  type: "LOGOUT_USER",
  payload: {}
});
export const logInUserAction = user => ({
  type: "LOGIN_USER",
  payload: user
});
export const setTokenAction = token => ({
  type: "SET_TOKEN",
  payload: token
});
export const addUserAdventureAction = adventure => ({
  type: "NEW_ADVENTURE",
  payload: adventure
});
export const addUserDonationAction = donation => ({
  type: "NEW_DONATION",
  payload: donation
});
export const setUserErrorsAction = errors => ({
  type: "SET_ERRORS",
  payload: errors
});
export const loadUserAction = user => ({
  type: "LOAD_USER",
  payload: user
});
