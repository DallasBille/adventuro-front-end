import React from 'react'

const UserAdventureList = (props) => {



    return(
        <div>
            <h3>{props.adventures.title}</h3>
            <p>Cost: ${props.adventures.cost}</p>
        </div>

    )


}
export default UserAdventureList
