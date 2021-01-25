import React, { Component } from 'react';
import Container from './Components/Container/Container';
import Searchbar from './Components/Searchbar/Searchbar';
// import ImageGallery from './Components/ImageGallery/ImageGallery';
// import Button from './Components/Button/Button';
// import Loader from './Components/Loader/Loader';
// import Modal from './Components/Modal/Modal';

export default class App extends Component {
  state = {
    searchQuery: '',
    searchPage: 1,
  };

  getSearchQuery = (query) => {
    this.setState({ searchQuery: query });
  };

  render() {
    return (
      <Container>
        <Searchbar getSearchQuery={this.getSearchQuery} />
      </Container>
    );
  }
}
