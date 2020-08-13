const API_URL  = 'https://cors-anywhere.herokuapp.com/http://gd.geobytes.com'; // for github page

class CityService {
  static searchCitiesByName(city) {
    return fetch(`${API_URL}/AutoCompleteCity?q=${city}`)
      .then(response => {
        if (!response.ok) throw response;
        return response.json();
      })
      .catch(error => {
        console.log(error);
      })
  }
}

export default CityService;
