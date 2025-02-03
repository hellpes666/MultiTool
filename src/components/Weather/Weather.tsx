import React from 'react';
import { SEO } from '..';

const Weather: React.FC = () => {
  return (
    <div>
      <SEO title='Weather' />
      <div className='comingSoon'>
        <div>
          <h1 className='comingSoonText text text-9xl'>Coming Soon</h1>
        </div>
      </div>
    </div>
  );
};

export default Weather;

// TO-DO: Write documentation
