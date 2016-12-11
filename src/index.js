import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Search from './components/Search';
import Video from './components/Video';
import { Router, Route, browserHistory } from 'react-router';
import './index.css';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/search" component={Search} />
    <Route path="/video/:videoId" component={Video}/>
  </Router>
), document.getElementById('root'));
