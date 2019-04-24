import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import SignUp from './SignUp'
import LogIn from './LogIn'
import Home from './Home'
import LogOut from './LogOut'

const RouterComp = () => {
    return(
        <Switch>
            <Route path="/home" component={Home}/>
            <Route path="/signup" component={SignUp}/>
            <Route path="/login" component={LogIn}/>
            <Route path="/logout" component={LogOut}/>
        </Switch>
    )
}

export default RouterComp
