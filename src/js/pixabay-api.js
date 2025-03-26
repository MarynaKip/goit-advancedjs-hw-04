import axios from "axios";

export async function fetchImages(query) {
    const API_KEY = '49484019-11a5d61f6cd196bafa2004bf7';
    const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true`;
    const loader = document.querySelector('.loader');

    if (loader) {
        loader.classList.add('active');
    }

    try {
        const response = await axios.get(URL);
        return response.data;
    } catch (error) {
        console.error(error);
        return { hits: [] };
    } finally {
        if (loader) {
            loader.classList.remove('active'); // ✅ Hide loader
        }
    }

    // const loader = document.querySelector('.loader');
    // loader.style.display = "block";
    // console.log(loader)
    // try {
    //     const response = await axios.get(URL);
    //     return response.data;
    // } catch (error) {
    //     console.error(error);
    //     return { hits: [] };
    // } finally {
    //     loader.style.display = "none";
    //     console.log(loader)

    // }
}
