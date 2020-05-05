import React from 'react';
import {RadarTile} from "./RadarTile";
import {WeatherTile} from "./WeatherTile";
import WeatherService from './services/WeatherService';

export class WeatherBox extends React.Component {
  styles = {
    // border: 1
  };

  // move to higher level, non-display component?
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      loading: true,
      style: 0,
      data: {}
    };

    this.changeStyle = this.changeStyle.bind(this);
  }

  componentDidMount() {
    WeatherService.getWeatherData().then((result) => {
      this.setState({
        loading: false,
        data: result.data,
        error: result.error
      });
    });
  }

  changeStyle() {
    console.log("changeStyle() before [" + this.state.style + "]");

    // basically toggle the style at this point
    this.setState({
      style: this.state.style === 0 ? 1 : 0
    });
    console.log("changeStyle() after [" + this.state.style + "]");
  }

  render() {
    const today = new Date();
    // console.log(today);

    if (this.state.style === 0) {
      return (
        <div style={this.styles}>
          <WeatherTile day={today}
                       data={this.state.data}
                       onClick={this.changeStyle}
                       style={this.state.style}
          />
        </div>
      )
    } else {
      return (
        <div style={this.styles}>
          <RadarTile style={this.state.style}
                     onClick={this.changeStyle}
          />
        </div>
      )
    }
  }
}
