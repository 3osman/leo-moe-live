import React, { Component } from 'react'
import logo from './../logo_3.gif'
import Streamchoice from './Streamchoice'
import Searchbar from './Searchbar'
import {Row, Col} from 'react-materialize'
import {platforms} from './../utils/config'
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
            <Col s={12} m={12} l={12}>
              <Searchbar ref="searchbar" youtube="true" twitch="true" periscope="true">
              </Searchbar>
            </Col>
          </Row>
          <Row>
            {platforms.map(function(p, index){
                return (
                    <Col s={12} m={4} l={4} key={index}>
                      <Streamchoice
                        mini={false}
                        platform={p}
                        initialChecked="true"
                        callbackParent={(type, value) => this.onChildChanged(type, value)} />
                    </Col>
                )
              })
            }
          </Row>
          {/*<Row>
            <footer>
              <Link to="about" className="white-text">ABOUT</Link>
              <Link to="contacts" className="white-text">CONTACTS</Link>
            </footer>
          </Row>*/}
        </div>
      </div>
    )
  }
}

export default Home
