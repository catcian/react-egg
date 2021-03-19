import React, { Component } from 'react';

export default class ComponentOld extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: 'demo'
    };
    console.log('constructor')
  }

  componentWillMount () {
    console.log('componentWillMount')
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  // 更新
  handleClick = () => {
    this.setState({
      text: 'demo2'
    })
  }

  componentWillUpdate () {
    console.log('componentWillUpdate')
  }

  componentDidUpdate () {
    console.log('componentDidUpdate')
  }
  
  render() {
    console.log('render')
    return (
      <div onClick={this.handleClick}>
        component-old - { this.state.text }
      </div>
    )
  }
}