import React from 'react';
import { NavLink } from 'react-router-dom';
import WeatherIcons from '../WeatherIcons/WeatherIcons';
import CSSTransition from '../CSSTransition/CSSTransition';
import './RecentlyViewed.scss';

const RecentlyViewedItem = ({ weather }) => (
  <li className='RecentlyViewed__item'>
    <NavLink to={`/w/${weather.name.toLowerCase()}`}>
      <h2 className='RecentlyViewed__item-title'>
        {weather.name}, {weather.sys.country}
      </h2>
      <h3 className='RecentlyViewed__item-temp'>
        {weather.main.temp.toFixed(0)}
        &deg;
      </h3>
      <WeatherIcons name={weather.weather[0].main}/>
      <h3 className='RecentlyViewed__item-desc'>
        {weather.weather[0].description}
      </h3>
    </NavLink>
  </li>
);

const RecentlyViewed = ({ recentWeathers }) => {
  const lastFiveCityWeather = recentWeathers.slice(-5);

  return (
    <CSSTransition type='fade' show={lastFiveCityWeather.length !== 0} duration={600}>
      <section className='RecentlyViewed'>
        <ul className='RecentlyViewed__list'>
          {lastFiveCityWeather.map((weather, index) => (
            <RecentlyViewedItem key={index} weather={weather}/>
          ))}
        </ul>
      </section>
    </CSSTransition>
  );
};

export default RecentlyViewed;
