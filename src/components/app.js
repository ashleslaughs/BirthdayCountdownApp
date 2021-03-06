import React, { Component } from 'react';
import Picker from './picker';
import Button from './button';
import Clock from './clock';
import ChangeDate from './changeDate';
import LargeText from './largeText';

import moment from 'moment';

export default class App extends Component {

  constructor(props) {
    super(props)

    this.timer = 0; 

    this.state = {
      active: false, 
      startDate: moment(),
      timeRemaining: {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      },
      age : 0
    };

    this.handleGenerate = this.handleGenerate.bind(this) 
  }

  handleChange = function(date) {
    console.log('APP JS HANDLE CHANGE', date._d);
    clearInterval(this.timer); 
    this.setState({
      startDate: date
    });
  }.bind(this)

  handleGenerate = function() {
    var timeBetween = today.getTime() - bday.getTime(); 

    var bday = this.state.startDate.toDate();
    var today = new Date(); 
    var currentMonth = today.getMonth();
    var birthMonth = bday.getMonth();
    
    var timeBetween = today.getTime() - bday.getTime();  
    var daysOld = Math.floor(timeBetween / 1000 * 60 * 60 * 24);
    var age = Number((daysOld/365).toFixed(0));
    
    this.setState({
      age, 
      active: true
    })

    if(birthMonth > currentMonth) {
      bday.setFullYear(today.getFullYear())
    } else if(birthMonth < currentMonth) {
      bday.setFullYear(today.getFullYear() + 1 )
    } else if(birthMonth = currentMonth) {
      var currentDay = today.getDate();
      var birthDay = bday.getDate();

      if(birthDay > currentDay) {
        bday.setFullYear(today.getFullYear())
      }
      if(birthDay <= currentDay) {
        bday.setFullYear(today.getFullYear() + 1 )
      }
    }

    var countDownDate = bday.getTime();

      this.timer = setInterval(function() {
      var now = today.getTime();
      var distance = countDownDate - now; 

      var days = Math.floor(distance / (1000 * 60 * 60 *24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distnace % (1000 * 60)) / 1000);

      const time = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

      const timeRemaining = {
        days,
        hours,
        minutes,
        seconds,
      };
      
      this.setState({timeRemaining})


      if(distance < 0) {
        clearInterval(this.timer);
      }

    }.bind(this), 1000);
  }.bind(this)

  renderItems = function() {
    if(this.state.active) {
      return [
        <Clock timeRemaining={this.state.timeRemaining}/>,
        ChangeDate('Change Date', () => this.setState({active: false})),
        LargeText('04/03'),
        <label className="grid__remaining">Remaining until you turn {this.state.age} </label>
      ]
    } else {
      return [
        <Picker startDate={this.state.startDate} callback={(date) => this.handleChange(date)}/>,
        Button('Generate Countdown', () => this.setState({active: true}))
      ]
    }
  }.bind(this)

  render() {
    return (
      <div>
        <div className="grid">
          <h1 className="grid__title"> Birthday Countdown </h1>
          <div className="grid__skew-dark-one-box">  </div>
          <div className="grid__skew-dark-two">  </div>
          <div className="grid__skew-dark-three">  </div>
          <div className= "grid_skew-light-one"></div>
          <div className= "grid_skew-light-two"></div>
          <div className= "grid_skew-light-three"></div>

          <Picker/>
          {this.renderItems()}
         </div>
      </div>
    );
  }
}
