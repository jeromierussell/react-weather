import React from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';

export class WeatherTile extends React.Component {
  styles = {
    // border: 1
  };

  weatherIconStyles = {
    fontSize: 48,
    color: '#d36326'
    // color: '#924da3'
  };

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("handleClick() [" + this.props.style + "]");
    this.props.onClick();
  }

  render() {
    if (this.props.data) {
      const today = moment(this.props.data.day);
      const today_day = today.format('dddd');
      const today_date = today.format('MMMM Do YYYY');

      const lastUpdated = moment(new Date(this.props.data.dt * 1000)).fromNow();

      let iconClass = "";
      if (this.props.data.weather) {
        iconClass = "wi wi-owm-" + this.props.data.weather[0].id;
      }

      if (this.props.style === 0) {
        return (
          <div className="container" onClick={this.handleClick}>
            <div className="weather-side">
              <div className="weather-gradient"></div>
              <div className="date-container">
                <h2 className="date-dayname">{today_day}</h2>
                <span className="date-day">{today_date}</span>
                <i className="location-icon" data-feather="map-pin"></i>
                <span className="location">{this.props.data ? this.props.data.name : ''}</span>
              </div>
              <div className="weather-container">
                <div style={this.weatherIconStyles}>
                  <i className={iconClass}></i>
                </div>
                <h1 className="weather-temp">{this.props.data.main ? this.props.data.main.temp : ''}°F</h1>
                <h3 className="weather-desc">{this.props.data.weather ? this.props.data.weather.main : ''}</h3>
              </div>
            </div>
            <div className="info-side">
              <div className="today-info-container">
                <div className="today-info">
                  <div className="precipitation"><span className="title">PRECIPITATION</span><span
                    className="value">0 %</span>
                    <div className="clear"></div>
                  </div>
                  <div className="humidity"><span className="title">CLOUDS</span><span
                    className="value">{this.props.data.clouds ? this.props.data.clouds.all : ''} %</span>
                    <div className="clear"></div>
                  </div>
                  <div className="wind"><span className="title">WIND</span><span
                    className="value">{this.props.data.wind ? this.props.data.wind.speed : ''} mph</span>
                    <div className="clear"></div>
                  </div>
                </div>
              </div>

              <div className="week-container">
                <ul className="week-list">
                  <li className="active"><i className="day-icon" data-feather="sun"></i><span
                    className="day-name">Tue</span><span className="day-temp">29°C</span></li>
                  <li><i className="day-icon" data-feather="cloud"></i><span className="day-name">Wed</span><span
                    className="day-temp">21°C</span></li>
                  <li><i className="day-icon" data-feather="cloud-snow"></i><span className="day-name">Thu</span><span
                    className="day-temp">08°C</span></li>
                  <li><i className="day-icon" data-feather="cloud-rain"></i><span className="day-name">Fry</span><span
                    className="day-temp">19°C</span></li>
                  <div className="clear"></div>
                </ul>
              </div>
              <div className="location-container">
                <button className="location-button"><i data-feather="map-pin"></i><span>Change location</span></button>
              </div>

            </div>
            <div className="last-updated">
              Last updated: {lastUpdated.toString()}
            </div>
          </div>
        )
      } else {
        return (
          <div className="container" onClick={this.handleClick}></div>
        )
      }
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
