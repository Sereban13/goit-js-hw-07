import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log (galleryItems);

const container = document.querySelector('.gallery');

const desktopGallery = galleryItems.map(
    ({ preview, original, description }) =>`
    <li class="gallery__item">
      <a class="gallery__link" href=${original}>
        <img
          class="gallery__image"
          src='${preview}'
          data-source='${original}'
          alt='${description}'
        />
      </a>
    </li>`
  ).join('');
  
container.insertAdjacentHTML('beforeend',desktopGallery);

container.addEventListener('click', mouseClick);

function mouseClick (event) {
  event.preventDefault();
  if(!event.target.classList.contains('gallery__image')) {
    return;
  }

  const currentCard = event.target.dataset.source;

  const instance = basicLightbox.create(`<img src='${currentCard}'/>`)
  instance.show(modalOn);

  function modalOn () {
      window.addEventListener('keydown', onEsc); 
    }

  function onEsc (eve) {
    if (eve.code !== 'Escape') {
        return;
      } else {
        instance.close();
        window.removeEventListener('keydown', onEsc); 
      }
      console.log(eve);
    }
}

// ___________________________________________________
//   const instance = basicLightbox.create(`<img src='${currentCard}'/>`, 
//   {
//   onShow : () => window.addEventListener('keydown', pressEsc),
//   onClose : () => window.removeEventListener('keydown', pressEsc),
// })

// function pressEsc (eve) {
//   if (eve.code !== 'Escape') {
//     return;
//   }
//   instance.close()
//   console.log(eve)
// }

// instance.show();
