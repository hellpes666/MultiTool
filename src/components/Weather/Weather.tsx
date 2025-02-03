import React from 'react';
import { SEO } from '..';
import { useEffect } from 'react';
import './weather.css';

const Weather: React.FC = () => {
  // useEffect(() => {
  //   const rainAnimation = () => {
  //     // Clear out everything
  //     const rainContainer = document.querySelector('.rain');
  //     rainContainer.innerHTML = ''; // Clear the container

  //     let increment = 0;
  //     let drops = '';
  //     let backDrops = '';

  //     while (increment < 100) {
  //       // Couple random numbers to use for various randomizations
  //       // Random number between 98 and 1
  //       const randoHundo = Math.floor(Math.random() * (98 - 1 + 1) + 1);
  //       // Random number between 5 and 2
  //       const randoFiver = Math.floor(Math.random() * (5 - 2 + 1) + 2);

  //       // Increment
  //       increment += randoFiver;

  //       // Add in a new raindrop with various randomizations to certain CSS properties
  //       drops += `<div class="drop" style="left: ${increment}%; bottom: ${randoFiver + randoFiver - 1 + 100}%; animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;">
  //                           <div class="stem" style="animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"></div>
  //                           <div class="splat" style="animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"></div>
  //                       </div>`;

  //       backDrops += `<div class="drop" style="right: ${increment}%; bottom: ${randoFiver + randoFiver - 1 + 100}%; animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;">
  //                               <div class="stem" style="animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"></div>
  //                               <div class="splat" style="animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"></div>
  //                           </div>`;
  //     }

  //     // Append drops to the respective containers
  //     const frontRow = document.querySelector('.rain.front-row');
  //     const backRow = document.querySelector('.rain.back-row');

  //     frontRow.innerHTML += drops;
  //     backRow.innerHTML += backDrops;
  //   };
  //   rainAnimation();
  // });
  return (
    <div>
      <SEO title='Weather' />
      <div className='comingSoon'>
        <div>
          <h1 className='comingSoonText text text-9xl'>Coming Soon</h1>
        </div>
      </div>
      {/* <div className='rain front-row'></div> */}
      {/* <div className='rain back-row'></div> */}
    </div>
  );
};

export default Weather;

// TO-DO: Write documentation
