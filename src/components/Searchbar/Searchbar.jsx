import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as AddIcon } from '../icons/search.svg';
import {
  SearchForm,
  SearchbarContainer,
  SearchButton,
} from './Searchbar.styled';


class Searchbar extends Component {
  state = {
    querySearch: '',
  };
  handleQueryChange = e => {
    this.setState({ querySearch: e.currentTarget.value.toLowerCase() });
  };
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.querySearch.trim() === '') {
      alert('pustaya');
      return;
    }
    this.props.onSubmit(this.state.querySearch);
    // this.setState({ querySearch: '' });
  };

  render() {
    return (
      <SearchbarContainer>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchButton type="submit" aria-label="пошук">
            <AddIcon width="28" height="28" />
          </SearchButton>
          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleQueryChange}
            value={this.state.querySearch}
          />
        </SearchForm>
      </SearchbarContainer>
    );
  }
}
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
