import React, { Component } from 'react';
import logo from './../logo.svg';
import {Row, Col, Icon} from 'react-materialize';
import './../css/VideoView.css';
import {browserHistory, Link} from 'react-router';

class VideoView extends Component {
  render() {
    return (
      <div className="Video">
        <nav className="navbar">
          <div className="nav-wrapper white navbar-wrapper">
            <Row>
              <Col s={12} className="left-align">
                <span className="navbar-content black-text">
                  <a href="#" onClick={this.props.goBack}>
                    <Icon className="black-text">arrow_left</Icon>
                  </a>
                  {}
                </span>
              </Col>
            </Row>
          </div>
        </nav>
        <div className="container">
          <Row>
            <Col s={12}>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}


export default VideoView;
