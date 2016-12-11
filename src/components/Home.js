import React, { Component } from 'react';
import logo from './../logo.svg';
import Streamchoice from './../components/Streamchoice';
import Searchbar from './../components/Searchbar';
import {Row, Col} from 'react-materialize';
import './../css/Home.css';

class Home extends Component {
  onChildChanged(type, value) {
    this.refs.searchbar.setSearchService(type, value);
  }
  render() {
    return (
      <div className="search-container container">
        <div className="Home">
          <Row>
            <h3 className="logo-wrapper">
              <img src={logo} className="App-logo" alt="logo" />
              OnAir.tv
            </h3>
          </Row>
          <Row>
            <Col s={12} m={10} offset={"m1"}>
              <Searchbar ref="searchbar" youtube="true" twitch="true">
              </Searchbar>
            </Col>
          </Row>
          <Row>
            <Col s={12} m={5} l={4} offset={"m1 l2"}>
              <Streamchoice mini={false} name="Youtube Live" type="youtube"
                          initialChecked="true"
                          callbackParent={(type, value) => this.onChildChanged(type, value)} />
            </Col>
            <Col s={12} m={5} l={4}>
              <Streamchoice mini={false} name="Twitch" type="twitch"
                          initialChecked="true"
                          callbackParent={(type, value) => this.onChildChanged(type, value)} />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Home;
