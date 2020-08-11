import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { setCurrentWeather } from "../../redux/weatherReducer/actions";
import WeatherService from '../../services/WeatherService';
import dateFormat from '../../helpers/dateFormat';
import { Row, Col } from "antd";
import { Alert } from 'antd';
import WeatherIcons from '../WeatherIcons/WeatherIcons';
import CSSTransition from '../CSSTransition/CSSTransition';
import './CurrentWeather.scss';

const CurrentWeather = (props) => {
  const {
    currentWeather,
    recentWeathers,
    responseErrorMessage
  } = useSelector(state => state.weatherReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    const recentWeather = recentWeathers.find(item => item.name.toLowerCase() === props.cityName);
    if (!!recentWeather) dispatch(setCurrentWeather(recentWeather));
    else WeatherService.getCurrentWeatherData(props.cityName);
  }, []);

  if (responseErrorMessage) {
    return (
      <Alert
        message='Error'
        description={responseErrorMessage}
        type='error'
        showIcon
      />
    )
  }

  if (!currentWeather) return null;

  return (
    <CSSTransition type='fade' show={currentWeather}>
      <section className='CurrentWeather'>
        <h1 className="CurrentWeather__title">
          {currentWeather.name}, {currentWeather.sys.country}
        </h1>
        <h2 className='CurrentWeather__temp'>
          {currentWeather.main.temp.toFixed(0)}
          &deg;
        </h2>
        <WeatherIcons name={currentWeather.weather[0].main}/>
        <h2 className='CurrentWeather__desc'>
          {currentWeather.weather[0].description}
        </h2>
        <h3 className='CurrentWeather__date'>
          {dateFormat(currentWeather.dt)}
        </h3>
        <Row className='CurrentWeather__row' gutter={[12, 12]}>
          <Col span={12}>
            Wind: {currentWeather.wind.speed} m/s
          </Col>
          <Col span={12}>
            Pressure: {currentWeather.main.pressure} hPa
          </Col>
        </Row>
        <Row className='CurrentWeather__row' gutter={[12, 12]}>
          <Col span={12}>
            Humidity: {currentWeather.main.humidity} %
          </Col>
          <Col span={12}>
            Cloudiness {currentWeather.clouds.all} %
          </Col>
        </Row>
      </section>
    </CSSTransition>
  )
};

export default CurrentWeather;
