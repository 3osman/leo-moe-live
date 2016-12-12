
import React, { Component } from 'react';
import {Row, Col, ProgressBar} from 'react-materialize';
import './../css/VideoView.css';
import Videobox from './../components/Videobox';
import youtube from './../img/youtube-logo.svg';
import twitch from './../img/twitch-logo.svg';

class VideoView extends Component {
  constructor(props) {
    super(props);
    this.state = {title: ""};
  }
  renderLoading() {
    return (
      <ProgressBar />
    );
  }
  renderError() {
    return (
      <div>
        Uh oh: {this.props.error.message}
      </div>
    );
  }
  renderResults() {
    if(this.props.error) {
      return this.renderError();
    }
    else {
      return (
          <Videobox
            url={this.props.results.streaming_url}
            viewers={this.props.results.viewers}
          />
      )
    }
  }
  render() {
    return (
      <div className="Video">
        <nav className="navbar">
          <div className="nav-wrapper white navbar-wrapper">
            <Row>
              <Col s={12} className="left-align">
                <span className="navbar-content black-text">
                  <a href="#" onClick={this.props.goBack}>
                    <i className="material-icons black-text">arrow_back</i>
                  </a>
                  <span className="title">
                    {this.props.results.title}
                  </span>
                </span>
              </Col>
            </Row>
          </div>
        </nav>
        <div className="container">
          <Row>
            <Col s={12} className="streaming-container">
              {
              this.props.loading ?
              this.renderLoading() :
              this.renderResults()
              }
            </Col>
          </Row>
          <Row>
            <Col s={12} className="streaming-container">
              <span className="platform">
                <img src={this.props.platform === 'youtube' ? youtube : twitch} alt="Logo" />
                <span className="viewers-label"> {this.props.platform.charAt(0).toUpperCase() + this.props.platform.slice(1)} </span>
              </span>
              <span className="viewers">
                {this.props.results.viewers ? <i className="material-icons black-text">remove_red_eye</i> : <i />}
                {this.props.results.viewers}
                {this.props.results.viewers ? <span className="viewers-label"> viewers</span> : <span></span>}
              </span>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}


export default VideoView;
