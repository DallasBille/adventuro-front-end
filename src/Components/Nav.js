import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Nav extends Component {

    render(){
        return(
        <nav>
            <Link to="/home">Home</Link>
            <Link>Donate</Link>
            <Link>Start Adventure</Link>
            <Link to="/signup">SignUp</Link>
            <Link to="/login">LogIn</Link>
            <Link to="/logout">LogOut</Link>
        </nav>
        )
    }
}
export default Nav
