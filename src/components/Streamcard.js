import React, { Component } from 'react';
import {CardPanel} from 'react-materialize';
import './../css/Streamcard.css';
import youtube from './../img/youtube-logo.svg';
import periscope from './../img/periscope-logo.svg';

class Streamcard extends Component {
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
      <CardPanel>
        <input type="checkbox"
               className="filled-in"
               id={this.props.type + "-filled-in-box"}
               defaultChecked={this.state.checked}
               onChange={this.handleChange}
               />
        <label htmlFor={this.props.type + "-filled-in-box"} className="black-text">
          <img src={this.props.type === 'youtube' ? youtube : periscope} alt="Logo" />
          {this.props.name}
        </label>
      </CardPanel>
    );
  }
}

export default Streamcard;
