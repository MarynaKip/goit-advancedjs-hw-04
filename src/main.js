import { fetchImages } from './js/pixabay-api.js'
import { renderGallery } from './js/render-functions.js';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

document.querySelector('#search-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    console.log('submit');
    console.log(event)
    const query = event.target.elements[0].value.trim();
    if (!query) {
        iziToast.warning({ title: 'Warning', message: 'Enter a search term!' });
        return;
    }
    
    document.querySelector('.gallery').innerHTML = '<div class="loader"></div>';
    
    const { hits } = await fetchImages(query);
    
    if (hits.length === 0) {
        iziToast.error({ title: 'Error', message: 'No images found!' });
    } else {
        renderGallery(hits);
    }
});
