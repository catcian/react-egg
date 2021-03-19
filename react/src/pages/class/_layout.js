import React from 'react'

class Layout extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div>
        <h1>class layout</h1>
        { this.props.children }
      </div>
    )
  }
}

export default Layout