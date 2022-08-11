import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector(".gallery");

const cardCreated = createGalleryCard(galleryItems);
galleryEl.insertAdjacentHTML("beforeend", cardCreated);

function createGalleryCard(cards) {
    return cards.map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="
      ${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    }).join('');
}
console.log(galleryItems);

galleryEl.addEventListener('click', onCardClick)

function onCardClick(event) {
  event.preventDefault();
    // console.log(event)
    if (!event.target.classList.contains("gallery__image")) {
      return;
    }
    console.log(event.target.dataset.source);
}