import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="grid">
          <div className="grid__skew-dark-one-box">  </div>
          <div className="grid__skew-dark-two">  </div>
          <div className="grid__skew-dark-three">  </div>
          <div className= "grid_skew-light-one"></div>
          <div className= "grid_skew-light-two"></div>
          <div className= "grid_skew-light-three"></div>
         </div>
      </div>
    );
  }
}
