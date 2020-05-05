import MockService from './MockService';

class WeatherService {
  // Used for testing...if true, we bypass any real api calls
  static MOCK_API = false;

  static OPEN_WEATHER_API_KEY = process.env.REACT_APP_OPEN_WEATHER_API_KEY;

  static OPEN_WEATHER_CONFIG = {
    lexington_id: 4297983,
    zip: "40509",
    lat: "38.0043264",
    long: "-84.3874304",
  };

  static OPEN_WEATHER_API_CALL_CITY = "https://api.openweathermap.org/data/2.5/weather?units=imperial&id=" +
    this.OPEN_WEATHER_CONFIG.lexington_id + "&appid=" + this.OPEN_WEATHER_API_KEY;

  static OPEN_WEATHER_API_CALL_ZIP = "https://api.openweathermap.org/data/2.5/weather?units=imperial&zip=" +
    this.OPEN_WEATHER_CONFIG.zip + "&appid=" + this.OPEN_WEATHER_API_KEY;

  static OPEN_WEATHER_API_CALL_GEO = "https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=" +
    this.OPEN_WEATHER_CONFIG.lat + "&long=" + this.OPEN_WEATHER_CONFIG.long + "&appid=" + this.OPEN_WEATHER_API_KEY;

  static OPEN_WEATHER_API_CALL_ONE_SHOT = "https://api.openweathermap.org/data/2.5/onecall?units=imperial&lat=" +
    this.OPEN_WEATHER_CONFIG.lat + "&lon=" + this.OPEN_WEATHER_CONFIG.long + "&appid=" + this.OPEN_WEATHER_API_KEY;

  static getWeatherData() {
    console.log("getWeatherData()");
    console.log(WeatherService.MOCK_API);

    if(WeatherService.MOCK_API) {
      return new Promise(function(resolve, reject) {
        resolve({
          data: MockService.MOCK_DATA,
          error: null
        });
      });
    } else {
      return fetch(this.OPEN_WEATHER_API_CALL_ONE_SHOT)
        .then(res => res.json())
        .then(
          (result) => {
            console.log(result);

            return {
              data: result,
              error: null
            }
          },
          (error) => {
            return {
              data: {},
              error: error
            }
          }
        );
    }
  }
}

export default WeatherService;