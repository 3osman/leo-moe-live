import React, { Component } from 'react';
import {CardPanel, Button} from 'react-materialize';
import {Link, browserHistory} from 'react-router';
import './../css/Searchbar.css';

class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {value: "",
                  services: {
                    youtube: true,
                    periscope: true
                  }
    };
    this.handleChange = this.handleChange.bind(this);
    this.search = this.search.bind(this);
    this.setSearchService = this.setSearchService.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  search(event) {
    event.preventDefault();
    if (this.state.value !== "" &&
        !(this.state.services.youtube === false &&
          this.state.services.periscope === false)) {
      browserHistory.push('/search?value=' +
                          this.state.value +
                          '?yt=' +
                          this.state.services.youtube +
                          '?p=' +
                          this.state.services.periscope);
    }
  }
  setSearchService(type, value) {
    if (type === 'youtube') {
      this.setState({ services: { ...this.state.services, youtube: value } });
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
                className='teal lighten-2 search-button'
                waves='light' icon='search'
                disabled={this.state.value === "" ||
                          this.state.services.youtube === false &&
                          this.state.services.periscope === false} />
        </Link>
        <input className="search-text grey-text grey-darken-4"
               type="text"
               name="search"
               placeholder="Search live stream.."
               value={this.state.value} onChange={this.handleChange} />
      </CardPanel>
    );
  }
}

export default Searchbar;
