import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { clearCurrentWeather } from "../../redux/weatherReducer/actions";
import Loader from '../../components/Loader/Loader';
import CurrentWeather from '../../components/CurrentWeather/CurrentWeather';
import ComingWeather from '../../components/ComingWeather/ComingWeather';

const CityWeather = (props) => {
  const { weatherIsLoading } = useSelector(state => state.weatherReducer);
  const dispatch = useDispatch();

  const cityName = props.match.params.id;

  useEffect(() => {
    return () => dispatch(clearCurrentWeather())
  }, [dispatch]);

  return (
    <section className='CityWeather'>
      {weatherIsLoading && <Loader/>}
      <CurrentWeather cityName={cityName} />
      <ComingWeather cityName={cityName} />
    </section>
  );
};

export default CityWeather;
