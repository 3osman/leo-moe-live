import React, { Component } from 'react';
import {CardPanel, Button} from 'react-materialize';
import {Link, browserHistory} from 'react-router';
import './../css/Searchbar.css';

class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {value: "", disabled: true};
    this.handleChange = this.handleChange.bind(this);
    this.search = this.search.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
    (this.state.value === "") ? this.setState({disabled: true}) : this.setState({disabled: false});
  }
  search(event) {
    event.preventDefault();
    if (this.state.value !== "") {
      browserHistory.push('/search?value='+this.state.value);
    }
  }
  render() {
    return (
      <CardPanel className="Searchbar">
        {/*<i className="grey-text grey-darken-4 material-icons">search</i>*/}
        <Link onClick={this.search}>
        <Button floating large className='teal lighten-2 search-button' waves='light' icon='search' disabled={this.state.disabled} />
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
