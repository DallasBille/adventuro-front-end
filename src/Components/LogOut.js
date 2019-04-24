import React from 'react'
import { connect } from 'react-redux'

const LogOut = (props) => {
console.log(props);
    return(
        <div>
            <h1>LogOut</h1>
            <button onClick={props.logOut, ()=> props.history.push('/signup')}>Log Out</button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        logOut: () => dispatch({type:"LOGOUT_USER", payload: {}})
    }
}

export default connect(null ,mapDispatchToProps)(LogOut)
