import React from 'react';
import PropTypes from 'prop-types';
import styles from './Loader.module.css';

const loaderType = {
  inload: styles.inload,
  fixed: styles.fixed,
};

export default function Loader({ type }) {
  return <div className={loaderType[type]}></div>;
}

Loader.defaultProps = {
  type: 'inload',
};

Loader.propTypes = {
  type: PropTypes.string,
};
