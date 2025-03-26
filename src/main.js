import { fetchImages } from './js/pixabay-api.js';
import { renderGallery } from './js/render-functions.js';

const form = document.querySelector('.form');
const input = document.querySelector('#search');
const gallery = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-more');
const loader = document.querySelector('.loader');

let query = '';
let page = 1;
let totalHits = 0;

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    
    query = input.value.trim();
    if (!query) return;
    
    page = 1;
    gallery.innerHTML = '';
    loadMoreBtn.style.display = 'none';
    
    loader.style.display = 'block';
    const data = await fetchImages(query, page);
    loader.style.display = 'none';

    if (data.hits.length === 0) {
        alert("No images found. Try another search.");
        return;
    }

    totalHits = data.totalHits;
    renderGallery(data.hits);
    
    if (page * 15 < totalHits) {
        loadMoreBtn.style.display = 'block';
    }
});

loadMoreBtn.addEventListener('click', async () => {
    page++;
    loader.style.display = 'block';

    const data = await fetchImages(query, page);
    loader.style.display = 'none';

    renderGallery(data.hits, true);

    if (page * 15 >= totalHits) {
        loadMoreBtn.style.display = 'none';
        alert("We're sorry, but you've reached the end of search results.");
    }

    smoothScroll();
});

function smoothScroll() {
    const cardHeight = document.querySelector('.gallery-item')?.getBoundingClientRect().height || 200;
    window.scrollBy({ top: cardHeight * 2, behavior: 'smooth' });
}
