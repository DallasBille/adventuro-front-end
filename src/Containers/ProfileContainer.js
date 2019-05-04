import React from 'react'
import UserDonations from '../Components/ProfileComponents/UserDonations'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux'
import UserAdventureList from '../Components/ProfileComponents/UserAdventureList'


const ProfileContainer = (props) => {



    const loadUserAdventures = () => {
        const userAdventures = props.adventures.adventures.filter(adventure => {
            return adventure.user_id === props.user.id
        })
        return userAdventures.map(adventure => {
            return <UserAdventureList myAdventure={adventure}/>
        })
    }
    const loadUserDonations = () => {
        return props.user.donation_adventures.map(donations => {
            return <UserDonations donations={donations}/>
        })
    }
    console.log(props);
    return(
        <div>
         <h3> My Donations</h3>
          {loadUserAdventures()}
          {loadUserDonations()}
        </div>

    )

}

const mapStateToProps  = (state) => {
    return state
}

export default connect(mapStateToProps, null)(ProfileContainer)
