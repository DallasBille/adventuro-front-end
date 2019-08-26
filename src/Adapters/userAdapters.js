// Storing these in their own file allow my component to be less cluttered and my file structure easier to navigate.

import { createUserAction } from "../Redux/actions/userActions";
import { logInUserAction } from "../Redux/actions/userActions";
import { setTokenAction } from "../Redux/actions/userActions";
import { setUserErrorsAction } from "../Redux/actions/userActions";
import { loadUserAction } from "../Redux/actions/userActions";

const signUpNewUser = userObj => dispatch =>
  fetch(`http://localhost:3000/api/v1/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(userObj)
  })
    .then(res => res.json())
    .then(user => {
      dispatch(createUserAction(user.user));
      dispatch(setTokenAction(user.jwt));
      localStorage.setItem("token", user.jwt);
    });

const logInUser = userObj => dispatch =>
  fetch(`http://localhost:3000/api/v1/auth`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(userObj)
  })
    .then(res => res.json())
    .then(user => {
      if (!!user.errors) {
        dispatch(setUserErrorsAction(user.errors));
      } else {
        dispatch(logInUserAction(user.user));
        dispatch(setTokenAction(user.jwt));
        localStorage.setItem("token", user.jwt);
      }
    });

const currentUser = token => dispatch =>
  fetch(`http://localhost:3000/api/v1/current_user`, {
    headers: { Authorization: `Bearer ${token}` }
  })
    .then(res => res.json())
    .then(user => {
      // this.props.loadUser(user.user)
      dispatch(loadUserAction(user.user));
      dispatch(setTokenAction(user.jwt));
      // this.props.setToken(token)
    });

export { currentUser };
export { logInUser };
export { signUpNewUser };
