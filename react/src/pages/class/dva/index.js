import React, { Component } from 'react';
import Lists from './lists'
import Search from './search'
import { connect } from 'dva'

class Index extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <Search {...this.props}></Search>
        <Lists {...this.props}></Lists>
      </div>
    )
  }
}

export default connect(({search}) => ({search}))(Index)