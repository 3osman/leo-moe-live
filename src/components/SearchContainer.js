import React, {PropTypes, Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import SearchView from './../components/SearchView';
import './../css/SearchContainer.css';
import axios from 'axios';
import {getListSuccess, searchStart, searchFailed} from './../actions/search-actions';

const api_url = 'https://live-stream-api.herokuapp.com/v1/videos/search';

class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.fetchData = this.fetchData.bind(this);
  }
  componentDidMount() {
    if(this.props.search === this.props.value) {
    }
    else {
      this.fetchData(this.props.value,
                this.props.yt === 'true' ? true : false,
                this.props.t === 'true' ? true : false);
    }
  }
  fetchData(v, yt, t) {
    this.props.dispatch(searchStart(v));
    let plats = {
      youtube: (yt) ? 'youtube' : null,
      twitch: (t) ? 'twitch' : null
    }
    axios.get(api_url, {
               params: {
                 query: v,
                 platforms: Object.keys(plats).map((k) => {return plats[k]}).join(",")
               }})
      .then(res => {
        this.props.dispatch(getListSuccess(res.data));
      })
      .catch(error => {
        if (error.response) {
          // The request was made, but the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error:', error.message);
        }
        console.log(error.config);

        this.props.dispatch(searchFailed(error));
      });
  }
  render() {
    return (
      <SearchView loading={this.props.loading}
                  error={this.props.error}
                  results={this.props.results}
                  location={this.props.location}
                  value={this.props.value}
                  yt={this.props.yt}
                  t={this.props.t}
                  fetchData={this.fetchData}>
      </SearchView>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return {
    search: state.searchState.search,
    results: state.searchState.results,
    loading: state.searchState.loading,
    error: state.searchState.error,
    yt: ownProps.location.query.yt,
    t: ownProps.location.query.t,
    value: ownProps.location.query.value
  };
};

export default connect(mapStateToProps)(SearchContainer);
