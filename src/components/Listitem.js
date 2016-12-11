import React, { Component } from 'react';
import './../css/Listitem.css';
import thumb from './../img/thumbnail.svg';
import youtube from './../img/youtube-logo.svg';
import periscope from './../img/periscope-logo.svg';
import {CollectionItem} from 'react-materialize';

class Listitem extends Component {
  constructor(props) {
    super(props);
    this.state = {object: this.props.object};
  }
  render() {
    return (
      <CollectionItem href={'/video/URLHERE'} className="avatar">
        <img src={thumb} className="item-thumbnail" alt="thumbnail" />
        <span className="title black-text">
          {this.state.object.title}
        </span>
        <div className="grey-text item-body">
          <img src={(this.state.object.platform === 'youtube') ? youtube : periscope} alt="Logo" />
        </div>
      </CollectionItem>
    );
  }
}

export default Listitem;
