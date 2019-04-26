import React from 'react'
import LogIn from './LogIn'
import SignUp from './SignUp'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

const Landing = (props) => {

    return(
        <>
            <h1>Landing</h1>
            <LogIn/>
            <SignUp/>
        </>
    )
}

const mapStateToProps = (state) => {
    return state
}
export default connect(mapStateToProps, null)(Landing)
