import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  calculateMonths = (start, end) => {

  }

  render() {
    return (
      <div className="App container">
        <div className="text-center">
          <h1>A Simple Work Experience Calculator!</h1>
          <hr />
        </div>

        <div className="row">
          
          <input type="text" className="form-control col-md-3" placeholder="Comapnay Name" aria-label="Username" aria-describedby="basic-addon1" />
          <input type="date" className="form-control col-md-3" placeholder="Start Month and Year" aria-label="Username" aria-describedby="basic-addon1" />
          <input type="date" className="form-control col-md-3" placeholder="End Month and Year" aria-label="Username" aria-describedby="basic-addon1" />

          <input type="text" className="form-control col-md-3" placeholder="Experience in Months" aria-label="Username" aria-describedby="basic-addon1" />
          
        </div>

      </div>
    );
  }
}

export default App;
