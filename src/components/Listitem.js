import React, { Component } from 'react'
import './../css/Listitem.css'
import logos from './../utils/logos'
import {CollectionItem} from 'react-materialize'

class Listitem extends Component {
  constructor(props) {
    super(props)
    this.state = {id: "", platformDisplay: ""}
  }
  componentDidMount() {
    if (this.props.platform === 'youtube') {
      this.setState({
        id: this.props.object.streaming_url.split('/')[4],
        platformDisplay: "Youtube Live"
      })
    }
    else if (this.props.platform === 'twitch') {
      this.setState({
        id: this.props.object.browser_url.split('/')[3],
        platformDisplay: "Twitch"
      })
    }
    else if (this.props.platform === 'periscope') {
      this.setState({
        id: this.props.object.browser_url.split('/')[4],
        platformDisplay: "Periscope"
      })
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
          <img src={logos[this.props.platform]} alt="Logo" />
          {this.state.platformDisplay}
        </div>
      </CollectionItem>
    )
  }
}

export default Listitem
