import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signUpNewUser } from '../Adapters/userAdapters'



class SignUp extends Component {

        state = {
            first_name: '',
            last_name: '',
            username: '',
            email: '',
            password: ''
        }

        setUserState = (event) => {
            this.setState({
             [event.target.name]: event.target.value
            })
        }

        // console.log(this.state);

    render(){
        return(
            <>
                <section>
                    <h1>SignUp</h1>
                    <form onSubmit={(event)=>{this.props.handleSignUp(event,this.state)}}>
                    <input onChange={this.setUserState} name="first_name" value={this.state.first_name}type="text" placeholder="enter firstname"/>
                     <br/>
                    <input onChange={this.setUserState} name="last_name" value={this.state.last_name}type="text" placeholder="enter lastname"/>
                     <br/>
                     <input onChange={this.setUserState} name="username" value={this.state.username}type="text" placeholder="enter username"/>
                     <br/>
                     <input onChange={this.setUserState} name="email" value={this.state.email} type="text" placeholder="enter email"/>
                     <br/>
                     <input onChange={this.setUserState} name="password" value={this.state.password} type="password" placeholder="enter password"/>
                     <br/>
                     <input type="submit"/>
                    </form>
                </section>
            </>
        )
    }

}

// connect connects out component to our store,
// it takes 2 arguments connect(mapstatetoprops, mapdispatchtoprops)

// mapdispatchtoprops is asynchronous, it take dispatch as an argument, and you must return an object. The key is a callback function that takes the user object we have in our local state, userObj gets called by our fetch function ().
const mapDispatchToProps = (dispatch) => {
    return {
        handleSignUp: (event, userObj) => {
            event.preventDefault()
            dispatch(signUpNewUser(userObj))
        }
    }

}

export default connect(null, mapDispatchToProps)(SignUp)
