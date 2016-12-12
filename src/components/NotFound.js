import React from 'react';
import {Row, Col} from 'react-materialize';
import './../css/NotFound.css';

const NotFound = () =>
  <div className="container NotFound">
    <Row>
      <Col s={12}>
        <h3>404 page not found</h3>
        <p>We are sorry but the page you are looking for does not exist.</p>
      </Col>
    </Row>
  </div>

export default NotFound;
