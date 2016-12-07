import React, { Component } from 'react';
import logo from './../logo.svg';
import Streamcard from './../components/Streamcard';
import Searchbar from './../components/Searchbar';
import {Row, Col, CardPanel} from 'react-materialize';
import './../css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Row>
          <h3 className="logo-wrapper">
            <img src={logo} className="App-logo" alt="logo" />
            OnAir.tv
          </h3>
        </Row>
        <Row>
          <Col s={12} m={10} offset={"m1"}>
            <Searchbar>
            </Searchbar>
          </Col>
        </Row>
        <Row>
          <Col s={12} m={5} l={4} xl={3} offset={"m1 l2"}>
            <Streamcard name="Youtube Live" type="youtube" />
          </Col>
          <Col s={12} m={5} l={4} xl={3}>
            <Streamcard name="Periscope" type="periscope" />
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
