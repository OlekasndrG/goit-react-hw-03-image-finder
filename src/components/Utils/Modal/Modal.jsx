// import { nanoid } from 'nanoid';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Overlay } from './Modal.styled';

import { createPortal } from 'react-dom';

const ModalRoot = document.getElementById('modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }
  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };
  handleBackdropCLick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };
  render() {
    return createPortal(
      <Overlay onClick={this.handleBackdropCLick}>
        {this.props.children}
      </Overlay>,
      ModalRoot
    );
  }
}
Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
export default Modal;
