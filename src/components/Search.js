import React, { Component } from 'react';
import logo from './../logo.svg';
import {Row, Col, CardPanel} from 'react-materialize';
import SearchbarTop from './../components/SearchbarTop';
import './../css/Search.css';
import Request from 'react-http-request';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {value: this.props.location.query.value,
                  youtube: this.props.location.query.yt,
                  periscope: this.props.location.query.p};
  }
  render() {
    return (
      <div className="Search">
        <Row>
          <Col s={12}>
            <SearchbarTop>
            </SearchbarTop>
          </Col>
        </Row>
        <Row>
          <Col s={12}>
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
                    return <div>loading...</div>;
                  } else {
                    return <div>{ JSON.stringify(result) }</div>;
                  }
                }
              }
            </Request>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Search;
