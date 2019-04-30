import React from 'react'
import { connect } from "react-redux"
import { logInUser } from '../Adapters/userAdapters'
import {Redirect} from 'react-router-dom'

class LogIn extends React.Component {

     state = {
         username: "",
         password: ""
     }

     handleChange = (event) => {
         this.setState({
             [event.target.name]: event.target.value
         })
     }
     handleSubmit = (event) => {
         event.preventDefault()
         let userObj = this.state
         this.props.logInUser(userObj)
     }

  render(){
      console.log(this.props);
    return(
        <div>
            {!!this.props.token ?
            <Redirect to="/profile"/> :
            <div>
            <h1>LogIn</h1>
            <form onSubmit={this.handleSubmit}>
            <input onChange={this.handleChange} type="text" name="username" placeholder="username" value={this.state.username}/>
            <br/>
            <input onChange={this.handleChange} type="password" name="password" placeholder="password" value={this.state.password}/>
            <br/>
            <input type="submit"/>
            </form>
        </div>
        }
        </div>
    )
  }
}


    // const mapDispatchToProps = (dispatch) => {
    //     return {
    //     findUser: (event, obj) => {
    //         event.preventDefault()
    //         dispatch(logInUser(obj))}
    //     }
    // }
const mapStateToProps = ({user}) => {
    return user
}
export default connect(mapStateToProps, {logInUser})(LogIn)
