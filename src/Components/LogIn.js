import React from 'react'
import { connect } from "react-redux"
import { logInUser } from '../Adapters/userAdapters'

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


  render(){
    return(
        <div>
            <h1>LogIn</h1>
            <form onSubmit={(event)=>this.props.findUser(event,this.state)}>
            <input onChange={this.handleChange} type="text" name="username" placeholder="username" value={this.state.username}/>
            <br/>
            <input onChange={this.handleChange} type="password" name="password" placeholder="password" value={this.state.password}/>
            <br/>
            <input type="submit"/>
            </form>
        </div>
    )
  }
}


    const mapDispatchToProps = (dispatch) => {
        return {
        findUser: (event, obj) => {
            event.preventDefault()
            dispatch(logInUser(obj))}
        }
    }

export default connect(null, mapDispatchToProps)(LogIn)
