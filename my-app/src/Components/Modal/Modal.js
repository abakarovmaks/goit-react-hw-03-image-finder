import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Image from '../Image';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleModalCloseOnEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleModalCloseOnEsc);
  }

  handleModalCloseOnEsc = (e) => {
    if (e.code === 'Escape') {
      this.props.toggleModal();
    }

    handleBackdropClick = (e) => {
      if (e.target === e.currentTarget) {
        this.props.toggleModal();
      }
    };
  };

  render() {
    const { src, alt } = this.props;
    return createPortal(
      <div className={styles.overlay} onClick={this.handleBackdropClick}>
        <Image src={src} alt={alt} className={styles.image} />
      </div>,
      modalRoot
    );
  }
}

Modal.defaultProps = {
  alt: 'large image',
};

Modal.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  toggleModal: PropTypes.func.isRequired,
};
