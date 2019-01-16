import React from 'react';
import './Weather.scss';
import WeatherForm from './WeatherForm';

class Weather extends React.Component {
  render() {
    return (
      <div className="Weather">
        <WeatherForm />
      </div>
    );
  }
}

export default Weather;
