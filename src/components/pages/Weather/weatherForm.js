import React from 'react';
// import firebase from 'firebase/app';
import getForcast from '../../../helpers/data/weatherbitRequests';
import './Weather.scss';

class weatherForm extends React.Component {

  render() {
    return (
      <div>
        <select class="custom-select" id="inputGroupSelect01">
          <option selected>Choose...</option>
          <option selected>{getForcast.city}</option>
        </select>

        <select class="custom-select" id="inputGroupSelect01">
          <option selected>Choose...</option>
          <option selected>{getForcast.state}</option>
        </select>
      </div>
    );
  }
}

export default weatherForm;