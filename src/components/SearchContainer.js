import React, { Component } from 'react';
import SearchView from './../components/SearchView';
import './../css/SearchContainer.css';
import axios from 'axios';

class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {results: [],
                  loading: true,
                  error: null};
    this.fetchData = this.fetchData.bind(this);
  }
  componentDidMount() {
    this.fetchData(this.props.location.query.value,
                   this.props.location.query.yt === 'true' ? true : false,
                   this.props.location.query.t === 'true' ? true : false);
  }
  fetchData(v, yt, t) {
    this.setState({loading: true, error: null});
    let plats = {
      youtube: (yt) ? 'youtube' : null,
      twitch: (t) ? 'twitch' : null
    }
    axios.get('https://live-stream-api.herokuapp.com/v1/videos/search', {
               params: {
                 query: v,
                 platforms: Object.keys(plats).map((k) => {return plats[k]}).join(",")
               }})
      .then(res => {
        this.setState({
          loading: false,
          error: null,
          results: res.data
        });
      })
      .catch(err => {
        this.setState({
          loading: false,
          error: err
        });
      });
  }
  render() {
    return (
      <SearchView loading={this.state.loading}
                  error={this.state.error}
                  results={this.state.results}
                  location={this.props.location}
                  fetchData={this.fetchData}>
      </SearchView>
    );
  }
}

export default SearchContainer;
