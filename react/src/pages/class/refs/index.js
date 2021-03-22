import React, { Component, createRef } from 'react';
import Child from './child'
import InputForward from './forward'

export default class Refs extends Component {

  constructor(props) {
    super(props);
    this.testRef = createRef()
    this.childRef = createRef()
    this.inputRef = createRef()
  }

  componentDidMount() {
    console.log('this.testRef', this.testRef)
    console.log(this.testRef.current.innerHTML)
    this.inputRef.current.focus()
  }

  handleChild (str) {
    this.childRef.current.handleChange(str)
  }

  render() {
    return (
      <div>
        <h1 ref={this.testRef}>refs test</h1>
        <Child ref={this.childRef}></Child>
        <button onClick={() => this.handleChild(Math.random())}>修改child值</button>
        <InputForward ref={this.inputRef}></InputForward>
      </div>
    )
  }
}