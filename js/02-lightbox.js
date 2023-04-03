import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const container = document.querySelector('.gallery');

const desktopGallery = galleryItems.map(
    ({ preview, original, description }) =>`
    <li class="gallery__item">
      <a class="gallery__link" href=${original}>
        <img
          class="gallery__image"
          src='${preview}'
          alt='${description}'
        />
      </a>
    </li>`
  ).join('');
 
container.insertAdjacentHTML('beforeend',desktopGallery);

new SimpleLightbox('.gallery a',  
    {captionDelay: 250,
    captionsData: 'alt',});