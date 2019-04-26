import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import HomeContainer from '../Containers/HomeContainer'
import ProfileContainer from '../Containers/ProfileContainer'
import DonateContainer from '../Containers/DonateContainer'

const RouterComp = () => {
    return(
        <Switch>
            <Route path="/profile" component={ProfileContainer}/>
            <Route path="/home" component={HomeContainer}/>
            <Route path="/donate" component={DonateContainer}/>
        </Switch>
    )
}

// <Route path="/home" component={Home}/>
export default RouterComp
