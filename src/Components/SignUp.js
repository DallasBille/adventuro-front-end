import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signUpNewUser } from '../Adapters/userAdapters'
import {Redirect} from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { setUserErrorsAction } from "../Redux/actions/userActions"

class SignUp extends Component {

        state = {
            first_name: '',
            last_name: '',
            username: '',
            email: '',
            password: '',
            errors: []
        }

validate = (userObj) => {
  const errors = [];
  if (userObj.first_name.length === 0) {
    errors.push("First name can't be empty");
  }
  if (userObj.last_name.length === 0) {
    errors.push("Last name can't be empty");
  }
  if (userObj.username.length === 0) {
    errors.push("username can't be empty");
  }
  if (userObj.email.length < 5) {
    errors.push("Email should be at least 5 charcters long");
  }
  if (userObj.email.split("").filter(x => x === "@").length !== 1) {
    errors.push("Email should contain an @");
  }
  if (userObj.email.indexOf(".") === -1) {
    errors.push("Email should contain at least one dot");
  }
  if (userObj.password.length < 6) {
    errors.push("Password should be at least 6 characters long");
  }
  return errors;
}



        setUserState = (event) => {
            this.setState({
             [event.target.name]: event.target.value
            })
        }

        handleSubmit = (e) => {
            e.preventDefault()
            let userObj = this.state
            const errors = this.validate(userObj)
            if(errors.length > 0){
                this.setState({
                    errors: errors
                })
            } else {
            this.props.signUpNewUser(userObj)
            return <Redirect to="/profile"/>
            }
        }



    render(){
        console.log(this);
        return(
            <>
                <section className="sign-up">
                    <h1>SignUp</h1>
                    <form onSubmit={this.handleSubmit}>
                    {this.state.errors.map(error => (
                        <p key={error}> {error}</p>))}
                    <TextField
                    onChange={this.setUserState} value={this.state.first_name} name="first_name" id="standard-full-width"
                    label="Your First Name" style={{ margin: 8 }} placeholder="First Name" halfWidth margin="normal"
                    InputLabelProps={{shrink: true,}}/>
                    <br/>
                    <TextField
                    onChange={this.setUserState} value={this.state.last_name} name="last_name" id="standard-full-width"
                    label="Your Last Name" style={{ margin: 8 }} placeholder="Last Name" halfWidth margin="normal"
                    InputLabelProps={{shrink: true,}}/>
                    <br/>
                    <TextField
                    onChange={this.setUserState} value={this.state.username} name="username" id="standard-full-width"
                    label="User Name" style={{ margin: 8 }} placeholder="User Name" halfWidth margin="normal"
                    InputLabelProps={{shrink: true,}}/>
                    <br/>
                    <TextField
                    onChange={this.setUserState} value={this.state.email} name="email" id="standard-full-width"
                    label="Email" style={{ margin: 8 }} placeholder="Email" halfWidth margin="normal"
                    InputLabelProps={{shrink: true,}}/>
                    <br/>
                    <TextField
                    onChange={this.setUserState} value={this.state.password} type="password" name="password" id="standard-full-width"
                    label="Password" style={{ margin: 8 }} placeholder="Password" halfWidth margin="normal"
                    InputLabelProps={{shrink: true,}}/>
                     <br/>
                     <br/>
                      <Button onClick={this.handleSubmit}>Sign Up</Button>
                    </form>
                </section>
            </>
        )
    }

}

export default connect(null, {signUpNewUser})(SignUp)
