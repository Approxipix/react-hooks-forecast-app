import store from '../redux/store'
import { currentWeatherFetchData, comingWeatherFetchData } from '../redux/weatherReducer/actions'

const API_URL  = 'https://api.openweathermap.org';

class WeatherService {
  static apiKey = store.getState().rootReducer.apiKey;

  static _getApiKey() {
    return store.getState().rootReducer.apiKey;
  }

  static _getTemperatureUnit() {
    const { temperatureUnit } = store.getState().rootReducer;
    return temperatureUnit === 'celsius' ? 'metric' : 'imperial';
  }

  static getCurrentWeatherData(city) {
    if (!city) return;
    const apiKey = this._getApiKey();
    const unit = this._getTemperatureUnit();
    const url = `${API_URL}/data/2.5/weather?q=${city}&units=${unit}&APPID=${apiKey}`;
    return store.dispatch(currentWeatherFetchData(url))
  }

  static getComingWeatherData(city) {
    if (!city) return;
    const apiKey = this._getApiKey();
    const unit = this._getTemperatureUnit();
    const url = `${API_URL}/data/2.5/forecast?q=${city}&units=${unit}&APPID=${apiKey}`;
    return store.dispatch(comingWeatherFetchData(url))
  }
}

export default WeatherService;
