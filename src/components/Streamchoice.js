import React, { Component } from 'react'
import './../css/Streamchoice.css'
import {logos, display} from './../utils/utils'
import {CardPanel} from 'react-materialize'

class Streamchoice extends Component {
  constructor(props) {
    super(props)
    this.state = {checked: this.props.initialChecked}
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
     this.props.callbackParent(this.props.platform, event.target.checked)
  }
  render() {
    if (this.props.mini === true) {
     return (
       <div className="choice-container">
         <input type="checkbox"
                className="filled-in"
                id={this.props.platform + "-filled-in-box"}
                defaultChecked={this.state.checked}
                onChange={this.handleChange}
                />
         <label htmlFor={this.props.platform + "-filled-in-box"} className="black-text">
           <img src={logos[this.props.platform]} alt="Logo" />
         </label>
       </div>
     )
   }
   else {
     return (
       <CardPanel>
         <input type="checkbox"
                className="filled-in"
                id={this.props.platform + "-filled-in-box"}
                defaultChecked={this.state.checked}
                onChange={this.handleChange}
                />
         <label htmlFor={this.props.platform + "-filled-in-box"} className="black-text">
           <img src={logos[this.props.platform]} alt="Logo" />
           {display[this.props.platform]}
         </label>
       </CardPanel>
     )
   }
  }
}


export default Streamchoice
