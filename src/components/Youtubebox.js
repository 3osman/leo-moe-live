import React, { Component } from 'react';
import './../css/Youtubebox.css';
import youtube from './../img/youtube-logo.svg';
import twitch from './../img/twitch-logo.svg';
import {CollectionItem} from 'react-materialize';

class Youtubebox extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <iframe width="560" height="315" src={this.props.url} frameBorder="0" allowFullScreen></iframe>
    );
  }
}

export default Youtubebox;
