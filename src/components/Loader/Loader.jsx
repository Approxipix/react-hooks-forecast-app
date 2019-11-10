import React from 'react';
import WeatherIcons from '../../components/WeatherIcons/WeatherIcons';
import './Loader.scss';

const Loader = () => {
  return (
    <div className='Loader'>
      <WeatherIcons name='Clear'/>
    </div>
  );
};

export default Loader;
