import React, { Component } from 'react';
import logo from './../logo.svg';
import {Row, Col, Icon} from 'react-materialize';
import './../css/Video.css';
import {browserHistory, Link} from 'react-router';

class Video extends Component {
  constructor(props) {
    super(props);
  }
  goBack(e) {
    e.preventDefault();
    window.history.back();
  }
  render() {
    return (
      <div className="Video">
        <nav className="navbar">
          <div className="nav-wrapper white navbar-wrapper">
            <Row>
              <Col s={12} className="left-align">
                <span className="navbar-content black-text">
                  <a href="#" onClick={this.goBack}>
                    <Icon className="black-text">arrow_left</Icon>
                  </a>
                  {this.props.params.videoId}
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

export default Video;
