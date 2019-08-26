import React from "react";
import { connect } from "react-redux";
import { logInUser } from "../Adapters/userAdapters";
import { Redirect } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { setUserErrorsAction } from "../Redux/actions/userActions";

class LogIn extends React.Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.setUserErrorsAction([]);
    console.log("clicked", this.state);
    let userObj = this.state;
    this.props.logInUser(userObj);
  };

  render() {
    return (
      <div className="log-in">
        {!!this.props.user.token ? (
          <Redirect to="/profile" />
        ) : (
          <div>
            <h1>LogIn</h1>
            <form onSubmit={this.handleSubmit}>
              {this.props.errors.userErrors.length > 0
                ? this.props.errors.userErrors.map(error => (
                    <p key={error}> {error}</p>
                  ))
                : null}
              <TextField
                onChange={this.handleChange}
                value={this.state.username}
                name="username"
                id="standard-full-width"
                label="Your User Name"
                style={{ margin: 8 }}
                placeholder="User Name"
                halfWidth
                margin="normal"
                InputLabelProps={{ shrink: true }}
              />
              <br />
              <TextField
                onChange={this.handleChange}
                value={this.state.password}
                type="password"
                name="password"
                id="standard-full-width"
                label="Password"
                style={{ margin: 8 }}
                placeholder="Password"
                halfWidth
                margin="normal"
                InputLabelProps={{ shrink: true }}
              />
              <br />
              <Button onClick={this.handleSubmit}>Log In</Button>
            </form>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};
export default connect(
  mapStateToProps,
  { logInUser, setUserErrorsAction }
)(LogIn);
