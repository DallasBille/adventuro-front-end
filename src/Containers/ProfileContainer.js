import React from "react";
import { connect } from "react-redux";
import { fetchAdventures } from "../Adapters/adventureAdapters";
import UserAdventureList from "../Components/ProfileComponents/UserAdventureList";
import ProfileDonationsContainer from "../Containers/ProfileDonationsContainer";
import UserInfo from "../Components/ProfileComponents/UserInfo";

class ProfileContainer extends React.Component {
  userAdventures = () => {
    return this.props.user.adventures.map(adventure => {
      return <UserAdventureList myAdventure={adventure} />;
    });
  };

  render() {
    return (
      <div>
        <UserInfo />
        <ProfileDonationsContainer donations={this.props.user.donations} />
        {this.props.user.adventures.length !== 0 ||
        this.props.user.donations.length !== 0 ? (
          this.userAdventures()
        ) : (
          <div className="profile-landing-div">
            <h4>Hey!</h4>
            <p className="profile-info">
              Thanks for making an account with us! This is your profile page.
              Here you can see and edit your adventure if you decide to get one
              funded. You can also see all the adventures you have donated to on
              the right.
            </p>
            <p className="profile-info">
              Thanks so much for participating in cool stuff for good causes!
            </p>
            <br />
            <img
              className="profile-image"
              src="https://i.imgur.com/oTkwT1l.jpg"
            />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  { fetchAdventures }
)(ProfileContainer);
