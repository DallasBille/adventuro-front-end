import React from 'react'

const UserAdventureList = (props) => {



    console.log(props.adventures)
    return(
        <div>
        <div className="user-adventure-list">
            <h3>{props.adventures.title}</h3>
            <p>Cost: ${props.adventures.cost}</p>
            <p>Mode: {props.adventures.mode}</p>
            <p>Mission: {props.adventures.mission}</p>

        </div>
        <div className="clear">
        </div>
        </div>
    )


}
export default UserAdventureList
