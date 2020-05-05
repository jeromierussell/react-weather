import React from 'react';
import PropTypes from 'prop-types';

export class RadarTile extends React.Component {
  iframeStyle = {
    position: 'absolute',
    top: -80,
    left: '33%'
  };

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
        <iframe title="radar-map" src={this.map_url} width="400" height="800" style={this.iframeStyle}/>
        <div className="map-container-button-area">
          <button className="map-container-button"><span>Back</span></button>
        </div>
      </div>
    )
  }
}

RadarTile.propTypes = {
  style: PropTypes.number
};
