import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Searchbar.module.scss';

export default class Searchbar extends Component {
  state = {
    input: '',
  };

  onChangeInput = (e) => {
    this.setState({ input: e.target.value.toLowerCase() });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { onSubmit } = this.props;
    onSubmit(this.state.input);
    this.setState({ input: '' });
  };

  render() {
    return (
      <header className={styles.searchbar}>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <button type="submit" name="Search" className={styles.button}>
            <span className={styles.span}>Search</span>
          </button>

          <input
            className={styles.input}
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            value={this.state.input}
            onChange={this.onChangeInput}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
