import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loader from '../Loader/Loader';
import styles from './Image.module.css';

export default class Image extends Component {
  state = {
    loaded: false,
  };

  onLoad = () => {
    this.setState({ loaded: true });
  };

  render() {
    const { src, alt, className, ...otherProps } = this.props;
    const loaded = this.state;

    return (
      <div className={styles.wrapper}>
        {loaded || <Loader />}
        <img
          src={src}
          alt={alt}
          className={className}
          onLoad={this.onLoad}
          {...otherProps}
        />
      </div>
    );
  }
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
};
