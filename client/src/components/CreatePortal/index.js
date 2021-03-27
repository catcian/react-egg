import React, { Component } from 'react';
import ReactDOM from 'react-dom'

export default class CreatePortal extends Component {

  constructor(props) {
    super(props);
    this.body = document.querySelector('body')
    this.elem = document.createElement('div')
  }

  componentDidMount() {
    this.elem.setAttribute('id', 'portal-root')
    this.body.appendChild(this.elem)
  }

  componentWillUnmount() {
    this.body.removeChild(this.elem)
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.elem)
  }
}