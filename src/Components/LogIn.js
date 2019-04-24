import React from 'react'

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
            <form >
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

export default LogIn
