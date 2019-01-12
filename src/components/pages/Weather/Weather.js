import React from 'react';
import './Weather.scss';
import weatherForm from './weatherForm';

class Weather extends React.Component {
  render() {
    return (
      <div className="Weather">
        <weatherForm />
      </div>
    );
  }
}

export default Weather;