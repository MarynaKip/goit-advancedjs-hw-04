import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let lightbox = new SimpleLightbox('.gallery a');

export function renderGallery(images, append = false) {
    const gallery = document.querySelector('.gallery');

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

    if (append) {
        gallery.insertAdjacentHTML('beforeend', markup);
    } else {
        gallery.innerHTML = markup;
    }

    lightbox.refresh();
}
