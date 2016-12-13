import React, { Component } from 'react'
import './../css/Videobox.css'

class Videobox extends Component {
  render() {
    return (
      <iframe
          src={this.props.url}
          height="500"
          width="900"
          frameBorder="0"
          scrolling="no"
          allowFullScreen="true">
      </iframe>
    )
  }
}

export default Videobox
