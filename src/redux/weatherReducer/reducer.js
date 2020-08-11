import * as t from './constants';

const initialState = {
  currentWeather: null,
  comingWeather: [],
  recentWeathers: [],
  weatherIsLoading: false,
  responseErrorMessage: '',
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case t.CLEAR_CURRENT_WEATHER:
      return {
        ...state,
        currentWeather: null,
        responseErrorMessage: '',
      };
    case t.WEATHER_IS_LOADING:
      return {
        ...state,
        weatherIsLoading: action.payload
      };
    case t.SET_CURRENT_WEATHER:
      return {
        ...state,
        currentWeather: action.payload,
        recentWeathers: [].concat(
          action.payload,
          state.recentWeathers.filter(item => item.name !== action.payload.name)
        )
      };
    case t.SET_COMING_WEATHER:
      const comingWeather = action.payload.list.filter(item => {
        const date = new Date(item.dt * 1000);
        return date.getHours() === 12
      });
      return {
        ...state,
        comingWeather
      };
    case t.WEATHER_FETCH_DATA_FAIL:
      return {
        ...state,
        responseErrorMessage: action.payload
      };
    default:
      return state;
  }
};

export default weatherReducer;
