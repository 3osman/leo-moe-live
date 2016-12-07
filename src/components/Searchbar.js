import React, { Component } from 'react';
import {CardPanel} from 'react-materialize';
import './../css/Searchbar.css';

class Searchbar extends Component {
  render() {
    return (
      <CardPanel className="Searchbar">
        <i className="grey-text grey-darken-4 material-icons">search</i>
        <input className="search-text grey-text grey-darken-4" type="text" name="search" placeholder="Search live stream.."></input>
      </CardPanel>
    );
  }
}

export default Searchbar;
