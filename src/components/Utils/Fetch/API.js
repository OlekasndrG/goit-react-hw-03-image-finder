import axios from 'axios';
import PropTypes from 'prop-types';

export const FetchAPI = async (searchQuery, page) => {
  const BASE_URL = 'https://pixabay.com/api/';
  const APi_KEY = '33321397-4ff964b04c1d431f58eb3ad84';
  try {
    const res = await axios(
      `${BASE_URL}?q=${searchQuery}&page=${page}&key=${APi_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
