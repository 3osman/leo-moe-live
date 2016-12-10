import React, { Component } from 'react';
import './../css/Listitem.css';
import logo from './../logo.svg';
import youtube from './../img/youtube-logo.svg';
import periscope from './../img/periscope-logo.svg';
import {CollectionItem} from 'react-materialize';

class Listitem extends Component {
  constructor(props) {
    super(props);
    this.state = {url: this.props.url};
  }
  render() {
    return (
      <CollectionItem href={'/video?url=' + this.state.url} className="avatar">
        <img src={logo} className="App-logo item-thumbnail" alt="logo" />
        <span className="title black-text">
          {this.state.url}
        </span>
        <p className="grey-text">
          Content line
        </p>
      </CollectionItem>
    );
  }
}

export default Listitem;
