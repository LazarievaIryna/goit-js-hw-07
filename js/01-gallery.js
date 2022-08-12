import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryEl = document.querySelector(".gallery");

const cardCreated = createGalleryCard(galleryItems);
galleryEl.insertAdjacentHTML("beforeend", cardCreated);

function createGalleryCard(cards) {
  return cards
    .map(({ preview, original, description }) => {
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
    })
    .join("");
}
console.log(galleryItems);

galleryEl.addEventListener("click", onCardClick);

function onCardClick(event) {
  event.preventDefault();

  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  const originalImg = event.target.dataset.source;

  //add from basicLightbox
  const modalWindow = basicLightbox.create(`
    <img src="${originalImg}" width="800" height="600">
`);
  modalWindow.show();

  document.body.addEventListener("keydown", (e) => {
    if (e.key === "Escape") modalWindow.close();
  });
}
