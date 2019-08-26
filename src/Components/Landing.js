import React from "react";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import { connect } from "react-redux";

const Landing = props => {
  return (
    <>
      <LogIn />
      <SignUp />
    </>
  );
};

const mapStateToProps = state => {
  return state;
};
export default connect(
  mapStateToProps,
  null
)(Landing);
