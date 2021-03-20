import React, { Component } from 'react';
import { SearchBar } from 'antd-mobile'

export default class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  handleChange = value => {
    this.setState({
      value
    })
  }

  handleSubmit = value => {
    // 同步派发事件
    this.props.dispatch({
      type: 'search/getListsAsync',
      payload: value
    })
  }

  render() {
    return (
      <div>
        <SearchBar
          value={this.state.value}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        ></SearchBar>
      </div>
    )
  }
}