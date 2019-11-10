import React from 'react';
import './WeatherIcons.scss';

const WeatherIcons = (props) => {
  switch (props.name) {
    case 'Drizzle':
      return (
        <div className="WeatherIcon drizzle">
          <div className="cloud"/>
          <div className="sun">
            <div className="rays"/>
          </div>
          <div className="rain"/>
        </div>
      );
    case 'Thunderstorm':
      return (
        <div className="WeatherIcon thunderstorm">
          <div className="cloud"/>
          <div className="lightning">
            <div className="bolt"/>
            <div className="bolt"/>
          </div>
        </div>
      );
    case 'Clouds':
      return (
        <div className="WeatherIcon clouds">
          <div className="cloud"/>
          <div className="cloud"/>
        </div>
      );
    case 'Snow':
      return (
        <div className="WeatherIcon flurries">
          <div className="cloud"/>
          <div className="snow">
            <div className="flake"/>
            <div className="flake"/>
          </div>
        </div>
      );
    case 'Clear':
      return (
        <div className="WeatherIcon clear">
          <div className="sun">
            <div className="rays"/>
          </div>
        </div>
      );
    case 'Rain':
      return (
        <div className="WeatherIcon rain">
          <div className="cloud"/>
          <div className="rain"/>
        </div>
      );
    default:
      return null;
  }
};

export default WeatherIcons;
