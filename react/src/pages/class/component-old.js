import React, { Component, PureComponent } from 'react';

// PureComponent 只对 state 属性 浅比较
export default class ComponentOld extends Component {

  constructor(props) {
    super(props);
    this.state = {
      // text: 'demo'
      text: { id: 1 }
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
      text: 'demo-new'
      // text: { id: 2}
    })
  }

  componentWillUpdate () {
    console.log('componentWillUpdate')
  }

  componentDidUpdate () {
    console.log('componentDidUpdate')
  }

  shouldComponentUpdate (props, state) {
    console.log('shouldComponentUpdate')
    console.log(props, state)
    // 等同于 PureComponent
    if (state.text === 'demo-new' && this.state.text !== state.text) return true
    return false
  }

  componentWillUnmount () {
    console.log('componentWillUnmount')
  }

  render() {
    console.log('render')
    return (
      <div onClick={this.handleClick}>
        component-old - { this.state.text.id }
      </div>
    )
  }
}