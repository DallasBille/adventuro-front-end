import React from "react";
import { logOutUserAction } from "../Redux/actions/userActions";
import { connect } from "react-redux";
const LogOut = props => {
  // const logOutRedirect = () => {
  //     props.logOut()
  // }
  console.log(props);
  return <div>{}</div>;
};

const mapDispatchToProps = dispatch => {
  return {
    logOut: () => dispatch(logOutUserAction())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(LogOut);
