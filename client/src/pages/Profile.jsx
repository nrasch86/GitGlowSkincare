import React, { useState, useEffect } from 'react';
// import { getUserProfile } from '../api'; 
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser, faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';

const Profile = () => {
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    // Fetch user profile data when the component mounts
    const fetchData = async () => {
      try {
        const profileData = await getUserProfile(); // Assuming getUserProfile fetches user data from the backend
        setUserProfile(profileData);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchData();

    // Clean up function
    return () => {
      setUserProfile(null); // Reset userProfile state when the component unmounts
    };
  }, []);

  return (
    <div className="profile-container">
      <h2>My Profile</h2>
      {userProfile ? (
        <div className="user-details">
          <p><FontAwesomeIcon icon={faUser} /> <strong>Name:</strong> {userProfile.name}</p>
          <p><FontAwesomeIcon icon={faEnvelope} /> <strong>Email:</strong> {userProfile.email}</p>
          <p><FontAwesomeIcon icon={faMapMarkerAlt} /> <strong>Address:</strong> {userProfile.address}</p>
          <p><FontAwesomeIcon icon={faPhone} /> <strong>Phone:</strong> {userProfile.phone}</p>
          <p><strong>Orders:</strong> {userProfile.orders.length}</p>
          {/* Assuming orders are an array and we are displaying the count */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile;
