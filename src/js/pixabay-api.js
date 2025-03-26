import axios from 'axios';

const API_KEY = '49484019-11a5d61f6cd196bafa2004bf7';
const BASE_URL = 'https://pixabay.com/api/';
const PER_PAGE = 15;

export async function fetchImages(query, page = 1) {
    const params = {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: PER_PAGE,
        page
    };

    try {
        const response = await axios.get(BASE_URL, { params });
        return response.data;
    } catch (error) {
        console.error('❌ Fetch error:', error);
        return { hits: [], totalHits: 0 };
    }
}
