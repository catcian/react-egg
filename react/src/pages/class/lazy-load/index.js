import React, { Component, lazy, Suspense } from 'react';
const Demo = lazy(() => import('./demo'))

export default class Index extends Component {

  constructor(props) {
    super(props);
    this.state = {
      flag: false
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        flag: true
      })
    }, 2000)
  }
  render() {
    return (
      <div>
        <Suspense fallback={<div>Loading</div>}>
          { this.state.flag ? <Demo></Demo> : null }
        </Suspense>
      </div>
    )
  }
}