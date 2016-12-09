import React, { Component } from 'react';
import logo from './../logo.svg';
import Streamcard from './../components/Streamcard';
import Searchbar from './../components/Searchbar';
import Search from './../components/Search';
import {Row, Col, CardPanel} from 'react-materialize';
import './../css/App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }
  onChildChanged(type, value) {
    this.refs.searchbar.setSearchService(type, value);
  }
  render() {
    return (
      <div className="search-container">
        <div className="App">
          <Row>
            <h3 className="logo-wrapper">
              <img src={logo} className="App-logo" alt="logo" />
              OnAir.tv
            </h3>
          </Row>
          <Row>
            <Col s={12} m={10} offset={"m1"}>
              <Searchbar ref="searchbar">
              </Searchbar>
            </Col>
          </Row>
          <Row>
            <Col s={12} m={5} l={4} offset={"m1 l2"}>
              <Streamcard name="Youtube Live" type="youtube" initialChecked="true" callbackParent={(type, value) => this.onChildChanged(type, value)} />
            </Col>
            <Col s={12} m={5} l={4}>
              <Streamcard name="Periscope" type="periscope" initialChecked="true" callbackParent={(type, value) => this.onChildChanged(type, value)} />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default App;
