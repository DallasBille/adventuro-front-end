import React from 'react'
import UserDonations from '../Components/ProfileComponents/UserDonations'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux'
import { fetchAdventures } from '../Adapters/adventureAdapters'
import UserAdventureList from '../Components/ProfileComponents/UserAdventureList'
import ProfileDonationsContainer from '../Containers/ProfileDonationsContainer'
import UserInfo from '../Components/ProfileComponents/UserInfo'
class ProfileContainer extends React.Component {

    componentDidMount(){
        this.props.fetchAdventures()
    }

     loadUserAdventures = () => {
        const userAdventures = this.props.adventures.adventures.filter(adventure => {
            return adventure.user_id === this.props.user.id
        })
        return userAdventures.map(adventure => {
            return <UserAdventureList myAdventure={adventure}/>
        })
    }

    render(){
        console.log(this.props.user.donation_adventures);
    return(
        <div>
          <UserInfo/>
          <ProfileDonationsContainer donations={this.props.user.user_donations}/>
          {this.loadUserAdventures()}
        </div>

    )
    }
}


const mapStateToProps  = (state) => {
    return state
}

export default connect(mapStateToProps, {fetchAdventures})(ProfileContainer)
