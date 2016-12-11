import React, { Component } from 'react';
import logo from './../logo.svg';
import {Row, Col, Icon, ProgressBar} from 'react-materialize';
import './../css/VideoView.css';
import {browserHistory, Link} from 'react-router';

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
      return (
        <div>{this.props.results.title}</div>
      );
    }
  }
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
                  {this.state.title}
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
