import React, { Component, PureComponent } from 'react';

// PureComponent 只对 state 属性 浅比较
export default class ComponentNew extends Component {

  constructor(props) {
    super(props);
    this.state = {
      // text: 'demo'
      text: { id: 1 }
    };
    console.log('constructor')
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps')
    console.log(props, state)
    return state
  }

  // componentDidMount() {
  //   console.log('componentDidMount')
  // }

  handleClick = () => {
    this.setState({
      text: { id: 2 }
    })
  }

  // 更新
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldCompnentUpdate')
    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate')
    return 'getSnapshotBeforeUpdate'
  }



  componentDidUpdate(props, state, snapshot) {
    console.log('componentDidUpdate')
    console.log(snapshot)
  }

  render() {
    console.log('render')
    return (
      <div onClick={this.handleClick}>
        component-new - { this.state.text.id }
      </div>
    )
  }
}