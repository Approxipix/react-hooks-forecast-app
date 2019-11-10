import * as t from './constants';

export function clearCurrentWeather(error) {
  return {
    type: t.CLEAR_CURRENT_WEATHER,
    payload: error
  };
}

export function weatherFetchDataFail(error) {
  return {
    type: t.WEATHER_FETCH_DATA_FAIL,
    payload: error
  };
}

export function weatherIsLoading(isLoading) {
  return {
    type: t.WEATHER_IS_LOADING,
    payload: isLoading
  };
}

export function setCurrentWeather(response) {
  return {
    type: t.SET_CURRENT_WEATHER,
    payload: response
  };
}

export function setComingWeather(response) {
  return {
    type: t.SET_COMING_WEATHER,
    payload: response
  };
}

export function currentWeatherFetchData(url) {
  return dispatch => {
    dispatch(weatherIsLoading(true));
    return fetch(url)
    .then(response => response.json())
    .then(response => {
      if (response.cod.toString() === '200') return response;
      else throw response.message;
    })
    .then(response => dispatch(setCurrentWeather(response)))
    .catch(error => dispatch(weatherFetchDataFail(error)))
    .finally(() => dispatch(weatherIsLoading(false)))
  }
}

export function comingWeatherFetchData(url) {
  return dispatch => {
    return fetch(url)
    .then(response => response.json())
    .then(response => {
      if (response.cod.toString() === '200') return response;
      else throw response.message;
    })
    .then(response => dispatch(setComingWeather(response)))
    .catch(error => console.log('Error', error))
  }
}
