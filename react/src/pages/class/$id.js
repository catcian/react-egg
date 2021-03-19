import React from 'react'

class Id extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    console.log(this.props)
    return (
      <div>class id - {this.props.match.params.id}</div>
    )
  }
}

export default Id