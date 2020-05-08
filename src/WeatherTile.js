import React from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';

export class WeatherTile extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("handleClick() [" + this.props.style + "]");
    this.props.onClick();
  }

  deriveWeatherIconColor(code, isDay) {
    let color = 'white';

    switch (true) {
      case (code >= 200 && code < 300):
        color = 'rebeccapurple';
        break;
      case (code < 400):
        color = 'powderblue';
        break;
      case (code < 600):
        color = 'mediumblue';
        break;
      case (code < 700):
        color = 'white';
        break;
      case (code === 800):
        if(isDay) {
          color = 'orange';
        } else {
          color = 'midnightblue';
        }
        break;
      case (code < 900):
        color = 'dimgrey';
        break;
      default:
        break;
    }

    return color;
  }

  render() {
    if (this.props.data) {
      const today = moment(this.props.data.day);
      const today_day = today.format('dddd');
      const today_date = today.format('MMMM Do YYYY');

      let iconClass = "";
      let weatherIconStyle = {
        fontSize: 48,
        color: 'white'
      };

      let lastUpdated = "loading...";
      if (this.props.data.current) {
        iconClass = "wi wi-owm-";

        const lastUpdatedTime = moment(new Date(this.props.data.current.dt * 1000));

        lastUpdated = lastUpdatedTime.fromNow();
        const sunrise = moment(new Date(this.props.data.current.sunrise * 1000));
        const sunset = moment(new Date(this.props.data.current.sunset * 1000));

        // console.log("sunrise [" + sunrise.toString() + "]");
        // console.log("sunset [" + sunset.toString() + "]");
        // console.log("last updated [" + lastUpdatedTime.toString() + "]");

        let isDay = true;
        if (sunrise.isSameOrBefore(lastUpdatedTime) && lastUpdatedTime.isBefore(sunset)) {
          iconClass += 'day-';
        } else {
          isDay = false;
          iconClass += 'night-';
        }

        iconClass += this.props.data.current.weather[0].id;
        weatherIconStyle.color = this.deriveWeatherIconColor(this.props.data.current.weather[0].id, isDay);
      }

      const iconClassWeek = [];
      if (this.props.data.daily) {
        for (let i = 1; i < 5; i++) {
          iconClassWeek.push("wi wi-owm-" + this.props.data.daily[i].weather[0].id);
        }
      }

      return (
        <div className="container" onClick={this.handleClick}>
          <div className="weather-side">
            <div className="weather-gradient"></div>
            <div className="date-container">
              <h2 className="date-dayname">{today_day}</h2>
              <span className="date-day">{today_date}</span>
              <i className="location-icon" data-feather="map-pin"></i>
              <span className="location">Lexington</span>
            </div>
            <div className="weather-container">
              <div style={weatherIconStyle}>
                <i className={iconClass}></i>
              </div>
              <h1 className="weather-temp">{this.props.data.current ? Math.round(this.props.data.current.temp) : ''}°F</h1>
              <h3 className="weather-desc">{this.props.data.current ? this.props.data.current.weather[0].main : ''}</h3>
            </div>
          </div>
          <div className="info-side">
            <div className="today-info-container">
              <div className="today-info">
                <div className="precipitation">
                  <span className="title">PRECIPITATION</span>
                  <span className="value">{this.props.data.current && this.props.data.current.rain ? this.props.data.current.rain['1h'] : ''}</span>
                  <div className="clear"></div>
                </div>
                <div className="humidity">
                  <span className="title">CLOUDS</span>
                  <span className="value">{this.props.data.current ? this.props.data.current.clouds : ''} %</span>
                  <div className="clear"></div>
                </div>
                <div className="wind">
                  <span className="title">WIND</span>
                  <span className="value">{this.props.data.current ? Math.round(this.props.data.current.wind_speed) : ''} mph</span>
                  <div className="clear"></div>
                </div>
              </div>
            </div>

            <div className="week-container">
              <ul className="week-list">
                <li className="active">
                  <i className={iconClassWeek[0]}></i>
                  <span className="day-name">{this.props.data.daily ? moment(this.props.data.daily[1].dt * 1000).format('ddd') : ''}</span>
                  <span className="day-temp">{this.props.data.daily ? Math.round(this.props.data.daily[1].temp.day) : ''}°F</span>
                </li>
                <li>
                  <i className={iconClassWeek[1]}></i>
                  <span className="day-name">{this.props.data.daily ? moment(this.props.data.daily[2].dt * 1000).format('ddd') : ''}</span>
                  <span className="day-temp">{this.props.data.daily ? Math.round(this.props.data.daily[2].temp.day) : ''}°F</span>
                </li>
                <li>
                  <i className={iconClassWeek[2]}></i>
                  <span className="day-name">{this.props.data.daily ? moment(this.props.data.daily[3].dt * 1000).format('ddd') : ''}</span>
                  <span className="day-temp">{this.props.data.daily ? Math.round(this.props.data.daily[3].temp.day) : ''}°F</span>
                </li>
                <li>
                  <i className={iconClassWeek[3]}></i>
                  <span className="day-name">{this.props.data.daily ? moment(this.props.data.daily[4].dt * 1000).format('ddd') : ''}</span>
                  <span className="day-temp">{this.props.data.daily ? Math.round(this.props.data.daily[4].temp.day) : ''}°F</span>
                </li>
                <div className="clear"></div>
              </ul>
            </div>
            <div className="location-container">
              <button className="location-button"><span>Show Radar</span></button>
            </div>

          </div>
          <div className="last-updated">
            Last updated: {lastUpdated.toString()}
          </div>
        </div>
      )
    } else {
      return <div>Loading...</div>
    }
  }
}

WeatherTile.propTypes = {
  day: PropTypes.instanceOf(Date),
  data: PropTypes.object,
  style: PropTypes.number
};
