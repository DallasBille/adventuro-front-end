import React from 'react'
import { connect } from "react-redux"

const UserInfo = (props) => {

console.log(props);

    return(
        <div className="user-info">
            <h2>Hello, {props.first_name}</h2>
        </div>
    )
}

const mapStateToProps = ({user}) =>{
    return user
}
export default connect(mapStateToProps, null)(UserInfo)
