import React from 'react'
import {Link} from 'react-router-dom'


const UserDonations = (props) => {
    return(
        <div className="user-donation-list">
            <Link className= 'user-donation-link' to={`/${props.donations.id}`}>{props.donations.adventure} ${props.donations.amount}</Link>
            <br/>
            <br/>
        </div>
    )
}
export default UserDonations
