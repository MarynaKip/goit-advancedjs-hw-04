import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

export function renderGallery(images) {
    const gallery = document.querySelector('.gallery');
    gallery.innerHTML = '';

    if (images.length === 0) {
        gallery.innerHTML = "<p>No images found. Try another search.</p>";
        return;
    }

    const markup = images.map(img => `
        <li class="gallery-item">
            <a href="${img.largeImageURL}">
                <img src="${img.webformatURL}" alt="${img.tags}">
                <div class="info">
                    <p>❤️ ${img.likes}  👁️ ${img.views}  💬 ${img.comments}  ⬇️ ${img.downloads}</p>
                </div>
            </a>
        </li>
    `).join('');

    gallery.innerHTML = markup;
    
    new SimpleLightbox('.gallery a').refresh();
}
