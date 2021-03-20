import React, { Component } from 'react';
import { List } from 'antd-mobile'
import SearchContext from './searchContext'

export default class Lists extends Component {

  static contextType = SearchContext

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <h1>text: { this.context.state.text }</h1>
        <List>
          { this.context.state.lists.map((item,index) => <List.Item key={index}>{ item }</List.Item>)}
        </List>
      </div>
    )
  }
}