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
import CreateAdventure from '../Components/CreateAdventure'


const ProfileContainer = (props) => {

    const loadUserAdventures = () => {
        return props.user_adventures.map(adventure => {
            return <UserAdventureList adventures={adventure}/>
        })
    }

    const loadUserDonations = () => {
        return props.donation_adventures.map(donations => {
            return <UserDonations donations={donations}/>
        })
    }

    return(
        <div>
            <h3> My Donations</h3>
          <h3>{props.full_name}</h3>
          {loadUserDonations()}
          {loadUserAdventures()}
        </div>
    )

}

const mapStateToProps  = ({user}) => {
    return user
}

export default connect(mapStateToProps, null)(ProfileContainer)
