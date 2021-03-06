import React, { Component } from 'react';
import { List } from 'antd-mobile'

export default class Lists extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <h1>text: { this.props.search.text }</h1>
        <List>
          { this.props.search.lists.map((item,index) => <List.Item key={index}>{ item }</List.Item>)}
        </List>
      </div>
    )
  }
}