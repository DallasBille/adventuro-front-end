import React from 'react'


const AdventureDivider = (props) => {


    return (
        <div className="adventure-show-divider">

        <h1 className="advenure-show-header" >Support the Adventure of {props.user ? props.user.first_name : null }</h1>
        </div>
    )

}
export default AdventureDivider
