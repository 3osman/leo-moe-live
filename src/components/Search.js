import React, { Component } from 'react';
import logo from './../logo.svg';
import {Row, Col, CardPanel} from 'react-materialize';
import Searchbar from './../components/Searchbar';
import './../css/Search.css';

class Search extends Component {
  render() {
    return (
      <div className="Search">
        <Row>
          <Col s={12}>
            <Searchbar>
            </Searchbar>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Search;
