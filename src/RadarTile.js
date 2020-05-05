import React from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';

export class RadarTile extends React.Component {
  iframeStyle = {
    position: 'absolute',
    top: -80,
    left: '33%'
  };

  OPEN_WEATHER_API_KEY = process.env.REACT_APP_OPEN_WEATHER_API_KEY;

  map_url = "http://openweathermap.org/weathermap?basemap=map&cities=false&layer=radar&lat=37.4051&lon=-86.7046&zoom=6";

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("RadarTile handleClick() [" + this.props.style + "]");
    this.props.onClick();
  }

  render() {
    return (
      <div className="map-container" onClick={this.handleClick}>
        <iframe src={this.map_url} width="400" height="800" style={this.iframeStyle}/>
      </div>
    )
  }
}

RadarTile.propTypes = {
  style: PropTypes.number
};
