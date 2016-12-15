import React from 'react'
import ReactDOM from 'react-dom'
import { mount } from 'enzyme'
import Home from './../components/Home'
import renderer from 'react-test-renderer';

it('it renders correctly', () => {
  var homeRendered = renderer.create(
    <Home />
  )
  expect(homeRendered.toJSON()).toMatchSnapshot()
})
