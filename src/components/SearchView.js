import React, { Component } from 'react';
import logo from './../logo.svg';
import {Row, Col, ProgressBar, Collection} from 'react-materialize';
import Searchbar from './../components/Searchbar';
import Streamchoice from './../components/Streamchoice';
import Listitem from './../components/Listitem';
import './../css/SearchView.css';
import {Link} from 'react-router';

class SearchView extends Component {
  onChildChanged(type, value) {
    this.refs.searchbar.setSearchService(type, value);
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
      var youtubeList = this.props.results.youtube.map(function(it, it_index){
                      return (
                          <Listitem object={it} platform="youtube" key={it_index}>
                          </Listitem>
                      );
                    });
      var twitchList = this.props.results.twitch.map(function(it, it_index){
                      return (
                          <Listitem object={it} platform="twitch" key={it_index}>
                          </Listitem>
                      );
                    });
      return (
        <Collection>
          {youtubeList}
          {twitchList}
        </Collection>
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
                           twitch={this.props.location.query.p === 'true'}
                           callbackParent={(v, yt, p) => this.props.fetchData(v, yt, p)}>
                </Searchbar>
              </Col>
              <Col m={4} className="hide-on-small-only">
                  <Streamchoice mini={true} name="Youtube Live" type="youtube"
                                initialChecked={this.props.location.query.yt === 'true'}
                                callbackParent={(type, value) => this.onChildChanged(type, value)} />
                  <Streamchoice mini={true} name="Twitch" type="twitch"
                                initialChecked={this.props.location.query.t === 'true'}
                                callbackParent={(type, value) => this.onChildChanged(type, value)} />
              </Col>
              <Col s={12} offset={"s1"} className="hide-on-med-and-up mobile">
                  <Streamchoice mini={true} name="Youtube Live" type="youtube"
                                initialChecked={this.props.location.query.yt === 'true'}
                                callbackParent={(type, value) => this.onChildChanged(type, value)} />
                  <Streamchoice mini={true} name="Twitch" type="twitch"
                                initialChecked={this.props.location.query.t === 'true'}
                                callbackParent={(type, value) => this.onChildChanged(type, value)} />
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

export default SearchView;
