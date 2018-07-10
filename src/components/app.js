import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="grid">
          <div> hi </div>
          <div> hi </div>
          <div> hi </div>
          <div className= "grid_skew-light-one"></div>
          <div className= "grid_skew-light-two"></div>
          <div className= "grid_skew-light-three"></div>
         </div>
      </div>
    );
  }
}
