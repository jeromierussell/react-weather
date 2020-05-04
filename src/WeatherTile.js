import React from 'react';
import PropTypes from 'prop-types';

export class WeatherTile extends React.Component {
  styles = {
    border: 1
  };

  weatherIconStyles = {
    fontSize: 48,
    color: '#924da3'
  };

  render() {
    if (this.props.data) {
      const lastUpdated = new Date(this.props.data.dt * 1000);

      let iconClass = "";
      if (this.props.data.weather) {
        iconClass = "wi wi-owm-" + this.props.data.weather[0].id;
      }

      return (
        <div style={this.styles}>
          {this.props.day.toString()} - Tile
          <div style={this.weatherIconStyles}>
            <i className={iconClass}></i>
          </div>
          <div>
            {this.props.data ? this.props.data.name : ''}
          </div>
          <div>
            {this.props.data.main ? this.props.data.main.temp : ''}
          </div>
          <div>
            {this.props.data.clouds ? this.props.data.clouds.all : ''}
          </div>
          <div>
            {this.props.data.wind ? this.props.data.wind.speed : ''}
          </div>
          <div>
            {lastUpdated.toString()}
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
  data: PropTypes.object
};
