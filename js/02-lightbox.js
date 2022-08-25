


import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);


const galleryUl = document.querySelector('.gallery');

function createGalleryItems(items) {
    return items
    .map(
        (item) => `<a class="gallery__item" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
      </a>`
  )
    .join('');
}

const addGalleryItems = createGalleryItems(galleryItems);
// galleryDiv.innerHTML = addGalleryItems;

function blockStandartAction(event) {
    event.preventDefault();
  }

galleryUl.addEventListener('click', onImageClick);
galleryUl.insertAdjacentHTML("beforeend", addGalleryItems);

function onImageClick(event) {
  blockStandartAction(event);
}

var lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    animationSpeed: 250,
 });


  galleryUl.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  });

