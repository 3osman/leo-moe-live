import React, { Component } from 'react';
import logo from './../logo_2.gif';
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
      var youtubeList = [];
      var twitchList = [];
      var periscopeList = [];
      if(this.props.results.youtube !== undefined) {
        youtubeList = this.props.results.youtube.map(function(it, it_index){
                      return (
                          <Listitem object={it} platform="youtube" key={it_index + "yt"}>
                          </Listitem>
                      );
                    });
      }
      if(this.props.results.twitch !== undefined) {
        twitchList = this.props.results.twitch.map(function(it, it_index){
                        return (
                            <Listitem object={it} platform="twitch" key={it_index + "t"}>
                            </Listitem>
                        );
                      });
      }
      if(this.props.results.periscope !== undefined) {
        periscopeList = this.props.results.periscope.map(function(it, it_index){
                        return (
                            <Listitem object={it} platform="periscope" key={it_index + "p"}>
                            </Listitem>
                        );
                      });
      }
      if (youtubeList.length === 0 &&
          twitchList.length === 0 &&
          periscopeList.length === 0) {
        return (
          <div className="no-results">
            <h3>No videos found</h3>
            <p>Your search criteria do not match any result.</p>
          </div>
        );
      }
      else {
        return (
          <Collection>
            {youtubeList}
            {twitchList}
            {periscopeList}
          </Collection>
        );
      }
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
                           twitch={this.props.location.query.t === 'true'}
                           periscope={this.props.location.query.p === 'true'}
                           callbackParent={(v, yt, t, p) => this.props.fetchData(v, yt, t, p)}>
                </Searchbar>
              </Col>
              <Col m={4} className="hide-on-small-only">
                  <Streamchoice mini={true} name="Youtube Live" platform="youtube"
                                initialChecked={this.props.location.query.yt === 'true'}
                                callbackParent={(type, value) => this.onChildChanged(type, value)} />
                  <Streamchoice mini={true} name="Twitch" platform="twitch"
                                initialChecked={this.props.location.query.t === 'true'}
                                callbackParent={(type, value) => this.onChildChanged(type, value)} />
                  <Streamchoice mini={true} name="Periscope" platform="periscope"
                                initialChecked={this.props.location.query.p === 'true'}
                                callbackParent={(type, value) => this.onChildChanged(type, value)} />
              </Col>
              <Col s={12} offset={"s1"} className="hide-on-med-and-up mobile">
                  <Streamchoice mini={true} name="Youtube Live" platform="youtube"
                                initialChecked={this.props.location.query.yt === 'true'}
                                callbackParent={(type, value) => this.onChildChanged(type, value)} />
                  <Streamchoice mini={true} name="Twitch" platform="twitch"
                                initialChecked={this.props.location.query.t === 'true'}
                                callbackParent={(type, value) => this.onChildChanged(type, value)} />
                  <Streamchoice mini={true} name="Periscope" platform="periscope"
                                initialChecked={this.props.location.query.p === 'true'}
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
