import React from 'react';
import {WeatherTile} from "./WeatherTile";

export class WeatherBox extends React.Component {
  // Used for testing...if true, we bypass any real api calls
  MOCK_API = false;

  styles = {
    // border: 1
  };

  OPEN_WEATHER_API_KEY = process.env.REACT_APP_OPEN_WEATHER_API_KEY;

  OPEN_WEATHER_CONFIG = {
    lexington_id: 4297983,
    zip: "40509",
//  lat = "38.0043264";
//  long = "-84.3874304";
    lat: "38",
    long: "-84",
  };

  OPEN_WEATHER_API_CALL_CITY = "https://api.openweathermap.org/data/2.5/weather?units=imperial&id=" +
    this.OPEN_WEATHER_CONFIG.lexington_id + "&appid=" + this.OPEN_WEATHER_API_KEY;

  OPEN_WEATHER_API_CALL_ZIP = "https://api.openweathermap.org/data/2.5/weather?units=imperial&zip=" +
    this.OPEN_WEATHER_CONFIG.zip + "&appid=" + this.OPEN_WEATHER_API_KEY;

  OPEN_WEATHER_API_CALL_GEO = "https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=" +
    this.OPEN_WEATHER_CONFIG.lat + "&long=" + this.OPEN_WEATHER_CONFIG.long + "&appid=" + this.OPEN_WEATHER_API_KEY;


  // move to higher level, non-display component?
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      loading: true,
      data: {}
    };
  }

  MOCK_DATA = {
    "coord": {
      "lon": -122.08,
      "lat": 37.39
    },
    "weather": [
      {
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01d"
      }
    ],
    "base": "stations",
    "main": {
      "temp": 70.11,
      "feels_like": 281.86,
      "temp_min": 280.37,
      "temp_max": 284.26,
      "pressure": 1023,
      "humidity": 100
    },
    "visibility": 16093,
    "wind": {
      "speed": 1.5,
      "deg": 350
    },
    "clouds": {
      "all": 1
    },
    "dt": 1560350645,
    "sys": {
      "type": 1,
      "id": 5122,
      "message": 0.0139,
      "country": "US",
      "sunrise": 1560343627,
      "sunset": 1560396563
    },
    "timezone": -25200,
    "id": 420006353,
    "name": "Mountain View",
    "cod": 200
  };

  // Move this somewhere better...just testing now
  componentDidMount() {
    if(this.MOCK_API) {
      this.setState({
        loading: false,
        data: this.MOCK_DATA
      });
    } else {
      fetch(this.OPEN_WEATHER_API_CALL_ZIP)
        .then(res => res.json())
        .then(
          (result) => {
            console.log(result);

            this.setState({
              loading: false,
              data: result
            });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              loading: false,
              error
            });
          }
        );
    }
  }

  render() {
    const today = new Date();
    console.log(today);

    return (
      <div style={this.styles}>
        <WeatherTile day={today}
                     data={this.state.data}
        />
      </div>
    )
  }
}
