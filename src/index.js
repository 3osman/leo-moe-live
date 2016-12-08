import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Search from './components/Search';
import { Router, Route, browserHistory } from 'react-router';
import './index.css';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/search" component={Search} />
  </Router>
), document.getElementById('root'));
