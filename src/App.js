import React from "react";
import "./App.css";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import RouterComp from "./Components/RouterComp";
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";
import { currentUser } from "./Adapters/userAdapters";
import { fetchAdventures } from "./Adapters/adventureAdapters";

class App extends React.Component {
  componentDidMount() {
    this.props.fetchAdventures();
    let token = localStorage.getItem("token");
    if (token) {
      this.props.currentUser(token);
    }
  }

  render() {
    return (
      <div className="App">
        <Router>
          <h3>App</h3>
          <Nav />
          <RouterComp />
          <div className="clear"></div>
          <Footer />
        </Router>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => {
  return user;
};
export default connect(
  mapStateToProps,
  { currentUser, fetchAdventures }
)(App);
