import React, { Component } from 'react';

import Modal from './Utils/Modal/Modal';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import { FetchAPI } from './Utils/Fetch/API';
import Loader from './Loader/Loader';
import { LoadMoreBtn, MainContainer } from './App.styled';

// idle , pending, fullfilled, rejected

export class App extends Component {
  state = {
    showModal: false,
    querySearch: '',
    page: 1,
    picturesArray: [],
    showMoreBTn: false,
    activeImg: {},
    status: 'idle',
    loading: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      this.state.querySearch !== prevState.querySearch ||
      this.state.page !== prevState.page
    ) {
      this.setState({ loading: true, showMoreBTn: false });
      const results = await FetchAPI(this.state.querySearch, this.state.page);
      this.setState(prevState => ({
        picturesArray: [...prevState.picturesArray, ...results.hits],
        loading: false,
      }));
      if (results.hits.length === 0) {
        alert(`We didnt find ${this.state.querySearch}`);
        this.setState({ showMoreBTn: false, loading: false });
        return;
      }
      if (results.totalHits > 12) {
        this.setState({ showMoreBTn: true });
      }
    }
  }

  handleSearchSubmit = querySearch => {
    this.setState({ querySearch: querySearch, page: 1, picturesArray: [] });
  };
  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };
  toggleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }));
  };
  openBigImage = currentUrl => {
    this.setState({
      activeImg: this.state.picturesArray.find(
        img => img.largeImageURL === currentUrl
      ),
    });
  };

  render() {
    return (
      <MainContainer>
        <Searchbar onSubmit={this.handleSearchSubmit} />
        {this.state.showModal && (
          <Modal onClose={this.toggleModal}>
            <img
              width="60%"
              src={this.state.activeImg.largeImageURL}
              alt={this.state.activeImg.tags}
            />
          </Modal>
        )}
        {this.state.loading && <Loader />}
        {this.state.picturesArray.length > 0 && (
          <ImageGallery
            picturesArray={this.state.picturesArray}
            openBigImage={this.openBigImage}
            toggleModal={this.toggleModal}
          />
        )}

        {this.state.showMoreBTn && (
          <LoadMoreBtn type="button" onClick={this.handleLoadMore}>
            Load More
          </LoadMoreBtn>
        )}
      </MainContainer>
    );
  }
}

export default App;
