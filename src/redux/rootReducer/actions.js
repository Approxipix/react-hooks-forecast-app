import * as t from './constants';

export function changeApiKey(error) {
  return {
    type: t.CHANGE_API_KEY,
    payload: error
  };
}

export function changeTemperatureUnit(error) {
  return {
    type: t.CHANGE_TEMPERATURE_UNIT,
    payload: error
  };
}
