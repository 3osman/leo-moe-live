import React, { Component } from 'react';
import {Collection} from 'react-materialize';
import Listitem from './../components/Listitem';
import './../css/Searchlist.css';

class Searchlist extends Component {
  constructor(props) {
    super(props);
    this.state = {list: this.props.list};
  }
  render() {
    var selectedList = this.state.list.map(function(it, it_index){
                    return (
                        <Listitem object={it} key={it_index}>
                        </Listitem>
                    );
                  });
    return (
      <Collection>
        {selectedList}
      </Collection>
    );
  }
}

export default Searchlist;
