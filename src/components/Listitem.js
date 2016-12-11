import React, { Component } from 'react';
import './../css/Listitem.css';
import youtube from './../img/youtube-logo.svg';
import twitch from './../img/twitch-logo.svg';
import {CollectionItem} from 'react-materialize';

class Listitem extends Component {
  constructor(props) {
    super(props);
    this.state = {id: ""};
  }
  componentDidMount() {
    if (this.props.platform === 'youtube') {
      this.setState({id: this.props.object.streaming_url.split('/')[4]});
    }
    else if (this.props.platform === 'twitch') {
      this.setState({id: this.props.object.browser_url.split('/')[3]});
    }
  }
  render() {
    return (
      <CollectionItem href={'/video/' + this.state.id + '/' + this.props.platform} className="avatar Listitem">
        <img src={this.props.object.thumbnail} className="item-thumbnail" alt="thumbnail" />
        <span className="title black-text">
          {this.props.object.title}
        </span>
        <div className="grey-text item-body">
          <img src={(this.props.platform === 'youtube') ? youtube : twitch} alt="Logo" />
          {(this.props.platform === 'youtube') ? "Youtube Live" : "Twitch"}
        </div>
      </CollectionItem>
    );
  }
}

export default Listitem;
