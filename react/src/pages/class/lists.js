import React, { Component } from 'react';
import ListItem1 from './list-item1'

export default class Lists extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }

  handleChild = msg => {
    console.log(msg)
    this.setState({
      name: msg
    })
  }

  render() {
    return (
      <div>
        <ListItem1 handleItem={this.handleChild}></ListItem1>
        <ListItem1 name={this.state.name}></ListItem1>
      </div>
    )
  }
}