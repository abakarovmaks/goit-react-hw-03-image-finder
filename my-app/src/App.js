import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Container from './Components/Container/Container';
import Searchbar from './Components/Searchbar/Searchbar';
import Button from './Components/Button/Button';
import ImageGalleryView from './Components/ImageGalleryView/';

export default class App extends Component {
  state = {
    searchQuery: '',
    searchPage: 1,
    moreImagesAvailable: false,
  };

  getSearchQuery = (query) => {
    this.setState({ searchQuery: query });
  };

  updateSearchPage = () => {
    this.setState((prevState) => ({ searchPage: prevState.searchPage + 1 }));
  };

  resetSearchPage = () => {
    this.setState({ searchPage: 1 });
  };

  updateImageAvialability = (status) => {
    this.setState({ moreImagesAvailable: status });
  };

  render() {
    const { searchQuery, searchPage, moreImagesAvailable } = this.state;

    return (
      <Container>
        <Searchbar getSearchQuery={this.getSearchQuery} />
        <ImageGalleryView
          searchQuery={searchQuery}
          page={searchPage}
          resetSearchPage={this.resetSearchPage}
          updateImageAvialability={this.updateImageAvialability}
        />
        {moreImagesAvailable && (
          <Button updateSearchPage={this.updateSearchPage} />
        )}
        <ToastContainer autoClose={3000} />
      </Container>
    );
  }
}
