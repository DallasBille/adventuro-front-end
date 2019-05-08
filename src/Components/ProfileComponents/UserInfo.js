import React from 'react'
import { connect } from "react-redux"

const UserInfo = (props) => {

const upperCaseName = () => {
    return props.first_name.charAt(0).toUpperCase() + props.first_name.slice(1)
}

    return(
        <div className="user-info">
            <h2>Hello, {upperCaseName()}</h2>
        </div>
    )
}

const mapStateToProps = ({user}) =>{
    return user
}
export default connect(mapStateToProps, null)(UserInfo)
