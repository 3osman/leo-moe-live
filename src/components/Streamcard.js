import React, { Component } from 'react';
import {CardPanel, Input, Col} from 'react-materialize';
import './../css/Streamcard.css';
import youtube from './../img/youtube-logo.svg';
import periscope from './../img/periscope-logo.svg';

class Streamcard extends Component {
  render() {
    return (
      <CardPanel>
        <input type="checkbox" className="filled-in" id={this.props.type + "-filled-in-box"} defaultChecked="checked" />
        <label htmlFor={this.props.type + "-filled-in-box"} className="black-text">
          <img src={this.props.type == 'youtube' ? youtube : periscope} alt="Logo" />
          {this.props.name}
        </label>
      </CardPanel>
    );
  }
}

export default Streamcard;
