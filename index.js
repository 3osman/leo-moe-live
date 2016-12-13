import React from 'react'
import { render } from 'react-dom'
import { Route, Router, browserHistory } from 'react-router'
import ReactDOM from 'react-dom'
import Home from './src/components/Home'
import SearchContainer from './src/components/SearchContainer'
import VideoContainer from './src/components/VideoContainer'
import NotFound from './src/components/NotFound'
import './src/index.css'


render((
  <Router history={browserHistory}>
    <Route path="/" component={Home} />
    <Route path="/search" component={SearchContainer} />
    <Route path="/video/:videoId/:platform" component={VideoContainer}/>
    <Route path="*" component={NotFound}/>
  </Router>
),document.getElementById('root'))
