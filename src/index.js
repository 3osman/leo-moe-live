import React from 'react'
import { render } from 'react-dom'
import { Route, Router, browserHistory } from 'react-router'
import Home from './components/Home'
import SearchContainer from './components/SearchContainer'
import VideoContainer from './components/VideoContainer'
import NotFound from './components/NotFound'
import './index.css'


render((
  <Router history={browserHistory}>
    <Route path="/" component={Home} />
    <Route path="/search" component={SearchContainer} />
    <Route path="/video/:videoId/:platform" component={VideoContainer}/>
    <Route path="*" component={NotFound}/>
  </Router>
),document.getElementById('root'))
