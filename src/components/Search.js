import React, { Component } from 'react';
import logo from './../logo.svg';
import {Row, Col} from 'react-materialize';
import Searchbar from './../components/Searchbar';
import Streamchoice from './../components/Streamchoice';
import './../css/Search.css';
import {Link} from 'react-router';
import axios from 'axios';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {results: "",
                  loading: true,
                  error: null};
    this.updateResult = this.updateResult.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }
  updateResult(res) {
    this.setState({results: res });
  }
  onChildChanged(type, value) {
    this.refs.searchbar.setSearchService(type, value);
  }
  componentDidMount() {
    this.fetchData(this.props.location.query.value, this.props.location.query.yt, this.props.location.query.p);
  }
  fetchData(v, yt, p) {
    this.setState({loading: true, error: null});
    let plats = {
      youtube: (yt) ? 'youtube' : null,
      periscope: (p) ? 'periscope' : null
    }
    axios.get('https://live-stream-api.herokuapp.com/v1/videos/search', {
               params: {
                 query: v,
                 platforms: Object.keys(plats).map((k) => {return plats[k]}).join(",")
               }})
      .then(res => {
        console.log(res.request.responseURL);
        this.updateResult(res.data.response);
        this.setState({
          loading: false,
          error: null
        });
      })
      .catch(err => {
        this.setState({
          loading: false,
          error: err
        });
      });
  }
  renderLoading() {
    return (
      <div className="progress">
          <div className="indeterminate"></div>
      </div>
    );
  }
  renderError() {
    return (
      <div>
        Uh oh: {this.state.error.message}
      </div>
    );
  }
  renderResults() {
    if(this.state.error) {
      return this.renderError();
    }
    else {
      return (
        <div>
          {this.state.results}
          </div>
      );
    }
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
                <Searchbar ref="searchbar" mini="true"
                           value={this.props.location.query.value}
                           youtube={this.props.location.query.yt === 'true'}
                           periscope={this.props.location.query.p === 'true'}
                           callbackParent={(v, yt, p) => this.fetchData(v, yt, p)}>
                </Searchbar>
              </Col>
              <Col m={4} className="hide-on-small-only">
                  <Streamchoice name="Youtube Live" type="youtube"
                                initialChecked={this.props.location.query.yt === 'true'}
                                callbackParent={(type, value) => this.onChildChanged(type, value)} />
                  <Streamchoice name="Periscope" type="periscope"
                                initialChecked={this.props.location.query.p === 'true'}
                                callbackParent={(type, value) => this.onChildChanged(type, value)} />
              </Col>
              <Col s={12} offset={"s1"} className="hide-on-med-and-up mobile">
                  <Streamchoice name="Youtube Live" type="youtube"
                                initialChecked={this.props.location.query.yt === 'true'}
                                callbackParent={(type, value) => this.onChildChanged(type, value)} />
                  <Streamchoice name="Periscope" type="periscope"
                                initialChecked={this.props.location.query.p === 'true'}
                                callbackParent={(type, value) => this.onChildChanged(type, value)} />
              </Col>
            </Row>
          </div>
        </nav>
        <div className="container">
          <Row>
            <Col s={12}> {
              this.state.loading ?
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

export default Search;
