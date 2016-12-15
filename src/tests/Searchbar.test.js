import React from 'react'
import ReactDOM from 'react-dom'
import { shallow, render, mount } from 'enzyme'
import Searchbar from './../components/Searchbar'
import renderer from 'react-test-renderer'

describe('searchbar', () => {
  var searchBar
  beforeEach(() => {
    searchBar = shallow(
      <Searchbar youtube="true" twitch="true" periscope="true"/>
    )
  })
  it('renders correctly', () => {
    expect(searchBar).toMatchSnapshot()
  })
})
