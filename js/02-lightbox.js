import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector(".gallery");

const cardCreated = createGalleryCard(galleryItems);
galleryEl.insertAdjacentHTML("beforeend", cardCreated);
console.log(cardCreated)
function createGalleryCard(cards) {
    return cards
    .map(({ preview, original, description }) => {
    return `<li class="gallery__item"> <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a></li>`;
    }).join("");
    
}
const gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
captionDelay: 250,
});
console.log(gallery)

console.log(galleryItems);
