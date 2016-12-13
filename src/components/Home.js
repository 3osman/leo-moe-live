import React, { Component } from 'react'
import logo from './../logo_2.gif'
import Streamchoice from './../components/Streamchoice'
import Searchbar from './../components/Searchbar'
import {Row, Col} from 'react-materialize'
import './../css/Home.css'

class Home extends Component {
  onChildChanged(type, value) {
    this.refs.searchbar.setSearchService(type, value)
  }
  render() {
    return (
      <div className="Home">
        <div className="search-container container">
          <Row className="hero">
            <h3 className="logo-wrapper">
              <img src={logo} className="App-logo" alt="logo" />
              Reemote
            </h3>
            <p>
              Search live videos around the internet
            </p>
          </Row>
          <Row>
            <Col s={12} m={10} offset={"m1"}>
              <Searchbar ref="searchbar" youtube="true" twitch="true" periscope="true">
              </Searchbar>
            </Col>
          </Row>
          <Row>
            <Col s={12} m={4} l={4} offset={""}>
              <Streamchoice mini={false} name="Youtube Live" platform="youtube"
                          initialChecked="true"
                          callbackParent={(type, value) => this.onChildChanged(type, value)} />
            </Col>
            <Col s={12} m={4} l={4}>
              <Streamchoice mini={false} name="Twitch" platform="twitch"
                          initialChecked="true"
                          callbackParent={(type, value) => this.onChildChanged(type, value)} />
            </Col>
            <Col s={12} m={4} l={4}>
              <Streamchoice mini={false} name="Periscope" platform="periscope"
                          initialChecked="true"
                          callbackParent={(type, value) => this.onChildChanged(type, value)} />
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default Home
