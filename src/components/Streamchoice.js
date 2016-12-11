import React, { Component } from 'react';
import './../css/Streamchoice.css';
import youtube from './../img/youtube-logo.svg';
import twitch from './../img/twitch-logo.svg';

class Streamchoice extends Component {
  constructor(props) {
    super(props);
    this.state = {checked: this.props.initialChecked};
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.props.callbackParent(this.props.type, event.target.checked);
  }
  render() {
    return (
      <div className="choice-container">
        <input type="checkbox"
               className="filled-in"
               id={this.props.type + "-filled-in-box"}
               defaultChecked={this.state.checked}
               onChange={this.handleChange}
               />
        <label htmlFor={this.props.type + "-filled-in-box"} className="black-text">
          <img src={this.props.type === 'youtube' ? youtube : twitch} alt="Logo" />
        </label>
      </div>
    );
  }
}

export default Streamchoice;
