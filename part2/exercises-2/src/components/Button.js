import React from 'react';
import './styles.css';

function Button() {
//Function to display an alert with a water or ocean themed message
const onLearnMore = () => {
   //Display an alert with water or ocean themed message
   alert('Splish Splash, take a dip in the big blue sea!');
};
   return ( 
         <button onClick={onLearnMore}>
            Learn More
         </button>
   );
}

export default Button;