import { fetchImages } from './js/pixabay-api.js';
import {
  renderImages,
  showNoResultsMessage,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

document
  .getElementById('search-form')
  .addEventListener('submit', async event => {
    event.preventDefault();

    const query = document.getElementById('search-input').value.trim();
    if (!query) {
      iziToast.warning({
        title: 'Warning',
        message: 'Please enter a search term!',
        position: 'topRight',
      });
      return;
    }

    showLoader();
    document.getElementById('gallery').innerHTML = '';

    try {
      const images = await fetchImages(query);
      if (images.length === 0) {
        showNoResultsMessage();
      } else {
        renderImages(images);
      }
    } catch (error) {
      iziToast.error({
        title: 'Error',
        message:
          'Something went wrong while fetching images. Please try again later.',
        position: 'topRight',
      });
    } finally {
      hideLoader();
    }
  });
