import React from "react";
import UserDonations from "../Components/ProfileComponents/UserDonations";
const ProfileDonationsContainer = props => {
  const loadUserDonations = () => {
    return props.donations.map(donations => {
      return <UserDonations donations={donations} />;
    });
  };
  return (
    <div className="profile-donations-container">
      <div className="my-donations">
        <h3>Trips You Donated To</h3>
      </div>
      {loadUserDonations()}
    </div>
  );
};

export default ProfileDonationsContainer;
