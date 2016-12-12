import React, { Component } from 'react';
import './../css/Twitchbox.css';
import youtube from './../img/youtube-logo.svg';
import twitch from './../img/twitch-logo.svg';
import {CollectionItem} from 'react-materialize';

class Twitchbox extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <iframe
          src={this.props.url}
          height="400"
          width="800"
          frameBorder="0"
          scrolling="no"
          allowFullScreen="true">
      </iframe>
    );
  }
}

export default Twitchbox;
