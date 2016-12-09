import React, { Component } from 'react';
import logo from './../logo.svg';
import {Row, Col, CardPanel} from 'react-materialize';
import Searchbar from './../components/Searchbar';
import Streamchoice from './../components/Streamchoice';
import './../css/Search.css';
import Request from 'react-http-request';
import {Link, browserHistory} from 'react-router';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {value: this.props.location.query.value,
                  youtube: this.props.location.query.yt,
                  periscope: this.props.location.query.p,
                  response: ""};
    this.updateResult = this.updateResult.bind(this);
  }
  updateResult(res) {
    this.setState({response: res });
  }
  onChildChanged(type, value) {
    this.refs.searchbar.setSearchService(type, value);
  }
  render() {
    return (
      <div className="Search">
        <nav className="navbar">
          <div className="nav-wrapper white navbar-wrapper">
            <Row>
              <Col s={12} className="hide-on-small-only right-align" m={2}>
                <Link to="/">
                  <img src={logo} className="App-logo" alt="logo" />
                </Link>
              </Col>
              <Col s={12} m={6} className="mini" >
                <Searchbar ref="searchbar" value={this.state.value} youtube={this.state.youtube} periscope={this.state.periscope}>
                </Searchbar>
              </Col>
              <Col m={4} className="hide-on-small-only">
                  <Streamchoice name="Youtube Live" type="youtube" initialChecked="true" callbackParent={(type, value) => this.onChildChanged(type, value)} />
                  <Streamchoice name="Periscope" type="periscope" initialChecked="true" callbackParent={(type, value) => this.onChildChanged(type, value)} />
              </Col>
              <Col s={12} offset={"s1"} className="hide-on-med-and-up mobile">
                  <Streamchoice name="Youtube Live" type="youtube" initialChecked="true" callbackParent={(type, value) => this.onChildChanged(type, value)} />
                  <Streamchoice name="Periscope" type="periscope" initialChecked="true" callbackParent={(type, value) => this.onChildChanged(type, value)} />
              </Col>
            </Row>
          </div>
        </nav>
        <Request
          url={'https://live-stream-api.herokuapp.com/v1/videos/search?query=' +
              this.state.value +
              '&platforms=' +
              'youtube'}
          withCredentials={true}
          method='get'
          accept='application/json'
          verbose={true}
        >
          {
            ({error, result, loading}) => {
              if (loading) {
                return (
                  <div className="progress">
                      <div className="indeterminate"></div>
                  </div>
                );
              } else {
                return (
                  <div className="container">
                    <Row>
                      <Col s={12}>
                        <div>{ () => this.updateResult(result) }</div>
                      </Col>
                    </Row>
                  </div>
                );
              }
            }
          }
        </Request>
      </div>
    );
  }
}

export default Search;
