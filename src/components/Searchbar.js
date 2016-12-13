import React, { Component } from 'react';
import {CardPanel, Button} from 'react-materialize';
import {browserHistory} from 'react-router';
import {Link} from 'react-router'
import './../css/Searchbar.css';

class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ((this.props.value) ? this.props.value : "" ),
                  services: {
                    youtube: this.props.youtube,
                    twitch: this.props.twitch,
                    periscope: this.props.periscope
                  }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.search = this.search.bind(this);
    this.setSearchService = this.setSearchService.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handleKeyPress(event) {
    if(event.key === 'Enter'){
      this.search(event);
    }
  }
  search(event) {
    event.preventDefault();
    if (this.state.value !== "" &&
        !(this.state.services.youtube === false &&
          this.state.services.twitch === false &&
            this.state.services.periscope === false)) {
      browserHistory.push('/search?value=' +
                          this.state.value +
                          '&yt=' +
                          this.state.services.youtube +
                          '&t=' +
                          this.state.services.twitch +
                          '&p=' +
                          this.state.services.periscope);
      if (this.props.mini) {
        this.props.callbackParent(this.state.value,
                                  this.state.services.youtube,
                                  this.state.services.twitch,
                                  this.state.services.persicope);
      }
    }
  }
  setSearchService(type, value) {
    if (type === 'youtube') {
      this.setState({ services: { ...this.state.services, youtube: value } });
    }
    else if (type === 'twitch') {
      this.setState({ services: { ...this.state.services, twitch: value } });
    }
    else if (type === 'periscope') {
      this.setState({ services: { ...this.state.services, periscope: value } });
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
                          (this.state.services.youtube === false &&
                          this.state.services.twitch === false &&
                          this.state.services.periscope === false)} />
        </Link>
        <input className="search-text grey-text grey-darken-4"
               type="text"
               name="search"
               placeholder={(this.state.value !== "") ? this.state.value : "Search live stream.."}
               value={this.state.value}
               onChange={this.handleChange}
               onKeyPress={this.handleKeyPress} />
      </CardPanel>
    );
  }
}

export default Searchbar;
