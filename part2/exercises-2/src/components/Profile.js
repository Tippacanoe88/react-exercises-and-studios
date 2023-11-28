import React from 'react';
import './styles.css';
import Button from './Button';
import oceanData from './oceans.json';

function Profile() {
  // Render each ocean animal's profile
  const oceanProfiles = oceanData.map((ocean) => (
    <div key={ocean.id} className={`${ocean.fishCheck === 'true' ? 'isAFish' : 'profile'}`}>
      <h1>{ocean.name}</h1>
      <img src={ocean.image} alt={ocean.name} className="img" />
      <ul>
        <h3>Fun Facts:</h3>
        <li>{ocean.fact1}</li>
        <li>{ocean.fact2}</li>
        <li>{ocean.fact3}</li>
      </ul>
      <Button />
    </div>
  ));

  return <>{oceanProfiles}</>;
}

export default Profile;
