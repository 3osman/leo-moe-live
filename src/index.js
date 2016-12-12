import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';
import SearchContainer from './components/SearchContainer';
import VideoContainer from './components/VideoContainer';
import NotFound from './components/NotFound';
import { Router, Route, browserHistory } from 'react-router';
import './index.css';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Home} />
    <Route path="/search" component={SearchContainer} />
    <Route path="/video/:videoId/:platform" component={VideoContainer}/>
    <Route path="*" component={NotFound}/>
  </Router>
), document.getElementById('root'));
