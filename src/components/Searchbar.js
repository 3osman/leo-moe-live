import React, { Component } from 'react'
import {CardPanel, Button} from 'react-materialize'
import {browserHistory} from 'react-router'
import {Link} from 'react-router'
import './../css/Searchbar.css'

class Searchbar extends Component {
  constructor(props) {
    super(props)
    this.state = {value: ((this.props.value) ? this.props.value : "" ),
                  youtube: this.props.youtube,
                  twitch: this.props.twitch,
                  periscope: this.props.periscope
                  }
    this.handleChange = this.handleChange.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
    this.search = this.search.bind(this)
    this.setSearchService = this.setSearchService.bind(this)
  }
  handleChange(event) {
    this.setState({value: event.target.value})
  }
  handleKeyPress(event) {
    if(event.key === 'Enter'){
      this.search(event)
    }
  }
  search(event) {
    event.preventDefault()
    if (this.state.value !== "" &&
        !(this.state.youtube === false &&
          this.state.twitch === false &&
            this.state.periscope === false)) {
      browserHistory.push('/search?value=' +
                          this.state.value +
                          '&yt=' +
                          this.state.youtube +
                          '&t=' +
                          this.state.twitch +
                          '&p=' +
                          this.state.periscope)
      if (this.props.mini) {
        this.props.callbackParent(this.state.value,
                                  this.state.youtube,
                                  this.state.twitch,
                                  this.state.periscope)
      }
    }
  }
  setSearchService(type, value) {
    if (type === 'youtube') {
      this.setState({youtube: value})
    }
    else if (type === 'twitch') {
      this.setState({twitch: value})
    }
    else if (type === 'periscope') {
      this.setState({periscope: value})
    }
  }
  render() {
    return (
      <CardPanel className="Searchbar">
        <Link onClick={this.search}>
        <Button floating large
                className='red lighten-2 search-button'
                waves='light' icon='search'
                disabled={this.state.value === "" ||
                          (this.state.youtube === false &&
                          this.state.twitch === false &&
                          this.state.periscope === false)} />
        </Link>
        <input className="search-text grey-text grey-darken-4"
               type="text"
               name="search"
               placeholder={(this.state.value !== "") ? this.state.value : "Search live stream.."}
               value={this.state.value}
               onChange={this.handleChange}
               onKeyPress={this.handleKeyPress} />
      </CardPanel>
    )
  }
}

export default Searchbar
