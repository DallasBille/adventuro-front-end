import React from "react";
import UserDonations from "../Components/ProfileComponents/UserDonations";
const ProfileDonationsContainer = props => {
  const loadUserDonations = () => {
    return props.donations.map(donations => {
      return <UserDonations donations={donations} />;
    });
  };
<<<<<<< HEAD
  return (
    <div className="profile-donations-container">
      <div className="my-donations">
        <h3>Trips You Donated To</h3>
      </div>
      {loadUserDonations()}
    </div>
  );
};

=======

  return (
    <div className="profile-donations-container">
      <div className="my-donations">
        <h3>Trips You Donated To</h3>
      </div>
      {loadUserDonations()}
    </div>
  );
};

>>>>>>> f6685a0156bfa9a97a0c77b0fa921684651fdf53
export default ProfileDonationsContainer;
