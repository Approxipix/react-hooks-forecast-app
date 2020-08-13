import jsonp from 'jsonp';

const API_URL  = 'https://gd.geobytes.com';

class CityService {
  static searchCitiesByName(city) {
    return new Promise((resolve, reject) => {
      jsonp(`${API_URL}/AutoCompleteCity?q=${city}`, null, (err, data) => {
        if (err) reject(err);
        resolve(data);
      });
    })
  }
}

export default CityService;
