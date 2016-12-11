import React, { Component } from 'react';
import './../css/Listitem.css';
import youtube from './../img/youtube-logo.svg';
import twitch from './../img/twitch-logo.svg';
import {CollectionItem} from 'react-materialize';

class Listitem extends Component {
  constructor(props) {
    super(props);
    this.state = {object: this.props.object};
  }
  render() {
    return (
      <CollectionItem href={'/video/'+this.state.object.title} className="avatar">
        <img src={this.state.object.thumbnail} className="item-thumbnail" alt="thumbnail" />
        <span className="title black-text">
          {this.state.object.title}
        </span>
        <div className="grey-text item-body">
          <img src={(this.state.object.platform === 'youtube') ? youtube : twitch} alt="Logo" />
        </div>
      </CollectionItem>
    );
  }
}

export default Listitem;
