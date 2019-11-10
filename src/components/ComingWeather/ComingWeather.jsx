import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import WeatherService from '../../services/WeatherService';
import dateFormat from '../../helpers/dateFormat';
import WeatherIcons from '../WeatherIcons/WeatherIcons';
import CSSTransition from '../CSSTransition/CSSTransition';
import './ComingWeather.scss';

const ComingWeatherItem = ({weather}) => {
  return (
    <li className='ComingWeather__item'>
      <h2 className='ComingWeather__item-title'>
        {dateFormat(weather.dt)}
      </h2>
      <h3 className='ComingWeather__item-temp'>
        {weather.main.temp.toFixed(0)}
        &deg;
      </h3>
      <WeatherIcons name={weather.weather[0].main}/>
      <h3 className='ComingWeather__item-desc'>
        {weather.weather[0].description}
      </h3>
    </li>
  )
};

const ComingWeather = (props) => {
  const {
    comingWeather,
    weatherIsLoading,
    responseErrorMessage
  } = useSelector(state => state.weatherReducer);

  useEffect(() => {
    WeatherService.getComingWeatherData(props.cityName);
  }, [props.cityName]);

  if (weatherIsLoading) return null;
  return (
    <CSSTransition type='fade' show={comingWeather.length !== 0 && !responseErrorMessage}>
      <section className='ComingWeather'>
        <ul className='ComingWeather__list'>
          {comingWeather.map((weather, index) => (
            <ComingWeatherItem key={index} weather={weather}/>
          ))}
        </ul>
      </section>
    </CSSTransition>
  );
};

export default ComingWeather;
