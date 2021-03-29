import React, { Component } from 'react';
import CreatePortal from '@/components/CreatePortal';
import { Icon } from 'antd-mobile';
import PropTypes from 'prop-types';

const Styles = {
  modal: {
    position: 'relative',
    top: '0',
    left: '0',
    zIndex: '999',
  },
  body: {
    backgroundColor: '#fff',
    position: 'fixed',
    height: '100%',
    width: '100%',
    top: '0',
    left: '0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  close: {
    position: 'absolute',
    top: '10px',
    right: '10px',
  },
};
export default class Modal extends Component {
  static defaultProps = {
    show: false,
    onClose: null,
  };

  static propTypes = {
    show: PropTypes.bool,
    onClose: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({
      showModal: nextProps.show,
    });
  }

  handleClick = () => {
    const { onClose } = this.props;
    onClose && onClose();
  };

  render() {
    const { showModal } = this.state;
    const { styleBody, styleClose } = this.props;
    const _styleBody = {
      ...Styles.body,
      ...styleBody,
    };
    const _styleClose = {
      ...Styles.close,
      ...styleClose,
    };
    return (
      <>
        {showModal ? (
          <CreatePortal style={Styles.modal}>
            <div style={_styleBody}>
              {this.props.children}
              <Icon
                type="cross"
                size="lg"
                style={_styleClose}
                onClick={this.handleClick}
              ></Icon>
            </div>
          </CreatePortal>
        ) : null}
      </>
    );
  }
}
