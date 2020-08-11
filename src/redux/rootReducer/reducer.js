import * as t from './constants';

const initialState = {
  apiKey: localStorage.getItem('apiKey') || '',
  temperatureUnit: 'celsius',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case t.CHANGE_API_KEY:
      localStorage.setItem('apiKey', action.payload)
      return {
        ...state,
        apiKey: action.payload
      };
    case t.CHANGE_TEMPERATURE_UNIT:
      return {
        ...state,
        temperatureUnit: action.payload
      };
    default:
      return state;
  }
};

export default rootReducer;
