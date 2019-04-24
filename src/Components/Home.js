import React from 'react'
import { connect } from "react-redux"


const Home = (props) => {
console.log(props);
    return(
        <div>

            <h1>HOOOOOOMMMMMEEE</h1>
            <p>{props.user.username}</p>
        </div>
    )
}

const mapStateToProps = (state) => {
    return state
}
export default connect(mapStateToProps, null)(Home)
