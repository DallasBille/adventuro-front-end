import React from 'react'
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
        return props.user.user_adventures.map(adventure => {
            return <UserAdventureList adventures={adventure}/>
        })
    }


    console.log(props.user.user_adventures);
    return(
        <div>
          {loadUserAdventures()}
        </div>
    )

}

const mapStateToProps  = (state) => {
    return state
}
export default connect(mapStateToProps, null)(ProfileContainer)
