import React from 'react'

class Id extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <h1>page id - { this.props.match.params.id }</h1>
    )
  }
}

export default Id