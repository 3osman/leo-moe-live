import React, { Component } from 'react';
import logo from './../logo.svg';
import {Row, Col, Icon} from 'react-materialize';
import VideoView from './../components/VideoView';
import './../css/VideoContainer.css';
import {browserHistory, Link} from 'react-router';

class VideoContainer extends Component {
  constructor(props) {
    super(props);
  }
  goBack(e) {
    e.preventDefault();
    window.history.back();
  }
  render() {
    return (
      <VideoView video={""} goBack={this.goBack}/>
    );
  }
}

export default VideoContainer;
