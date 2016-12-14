import React, { Component } from 'react'
import './../css/Listitem.css'
import {logos, display} from './../utils/utils'
import {CollectionItem} from 'react-materialize'

class Listitem extends Component {
  render() {
    return (
      <CollectionItem href={'/video/' + this.props.object.id + '/' + this.props.platform} className="avatar Listitem">
        <img src={this.props.object.thumbnail} className="item-thumbnail" alt="thumbnail" />
        <span className="title black-text">
          {this.props.object.title}
        </span>
        <div className="grey-text item-body">
          <img src={logos[this.props.platform]} alt="Logo" />
          {display[this.props.platform]}
        </div>
      </CollectionItem>
    )
  }
}

export default Listitem
