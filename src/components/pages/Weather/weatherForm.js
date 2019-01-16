import React from 'react';
// import firebase from 'firebase/app';
// import getForcast from '../../../helpers/data/weatherbitRequests';
import './Weather.scss';

class WeatherForm extends React.Component {
  state = {
    cityName: '',
    stateName: ''
  }

  handleChange = (e) => {
    this.setState({ cityName: e.target.value })
  }

  render() {
    return (
      <div className="m-3 p-3">
        <form>
          <div className="form-group">
            <input type="text" className="form-control" value={this.state.cityName} onChange={this.handleChange} placeholder="Enter City" />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" value={this.state.stateName} onChange={this.handleChange} placeholder="Enter State" />
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}



export default WeatherForm;
