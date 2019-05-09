import React from 'react'
import { connect } from "react-redux"

const Home = (props) => {

    return(
        <div>
            <h1>Home Page</h1>
            <p>Hey, {props.user.first_name}!</p>
            <div className="home-divider">

            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return state
}
export default connect(mapStateToProps, null)(Home)
