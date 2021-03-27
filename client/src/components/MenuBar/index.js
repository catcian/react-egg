import React, { Component } from 'react';
import PropTypes from "prop-types";
import { TabBar } from "antd-mobile";
import { BsHouseDoorFill, BsHouseDoor, BsBagFill, BsBag, BsPersonFill, BsPerson } from "react-icons/bs";
import { history } from "umi";

import './index.less'

export default class MenuBar extends Component {

  static defaultProps = {
    show: false,
    pathname: ''
  }

  static propTypes = {
    show: PropTypes.bool,
    pathname: PropTypes.string
  }

  constructor(props) {
    super(props);
    this.state = {
      tabs: [
        {
          title: '首页',
          selectedIcon: <BsHouseDoorFill style={{fontSize: '1.5rem'}}></BsHouseDoorFill>,
          select: <BsHouseDoor style={{fontSize: '1.5rem'}}></BsHouseDoor>,
          link: '/'
        },
        {
          title: '订单',
          selectedIcon: <BsBagFill style={{fontSize: '1.5rem'}}></BsBagFill>,
          select: <BsBag style={{fontSize: '1.5rem'}}></BsBag>,
          link: '/order'
        },
        {
          title: '我的',
          selectedIcon: <BsPersonFill style={{fontSize: '1.5rem'}}></BsPersonFill>,
          select: <BsPerson style={{fontSize: '1.5rem'}}></BsPerson>,
          link: '/user'
        },
      ]
    };
  }

  render() {
    return (
      <div className="menu-bar">
          <TabBar hidden={!this.props.show}>
            { 
              this.state.tabs.map(
                tab => <TabBar.Item key={tab.link}
                icon={tab.select}
                selectedIcon={tab.selectedIcon}
                selected={tab.link === this.props.pathname}
                title={tab.title}
                onPress={() => history.push(tab.link)}></TabBar.Item> 
              ) 
            }
          </TabBar>
      </div>
    )
  }
}