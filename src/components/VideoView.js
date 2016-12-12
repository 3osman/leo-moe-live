
import React, { Component } from 'react';
import logo from './../logo.svg';
import {Row, Col, Icon, ProgressBar, MediaBox} from 'react-materialize';
import './../css/VideoView.css';
import {browserHistory, Link} from 'react-router';
import Twitchbox from './../components/Twitchbox';
import Youtubebox from './../components/Youtubebox';

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
      console.log(this.props.results);
      if(this.props.platform === "youtube") {
        return (
          <Youtubebox url={this.props.results.streaming_url}/>
        )
      }
      else if (this.props.platform === "twitch") {
        return (
          <Twitchbox url={this.props.results.streaming_url}/>
        )
      }
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
                    <Icon className="black-text">arrow_left</Icon>
                  </a>
                  {this.props.results.title}
                </span>
              </Col>
            </Row>
          </div>
        </nav>
        <div className="container">
          <Row>
            <Col s={12}> {
              this.props.loading ?
              this.renderLoading() :
              this.renderResults()
              }
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}


export default VideoView;
