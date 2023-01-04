import { galleryItems } from './gallery-items.js';
const galleryContainerImages = document.querySelector(".gallery");
const galleryMarkupImages = createGalleryItemsMarkup(galleryItems);
galleryContainerImages.insertAdjacentHTML('beforeend', galleryMarkupImages);
function createGalleryItemsMarkup(array) {
    return array
        .map(
            ({ preview, original, description }) =>
                `<a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}"></a>`)
        .join("");
}
const gallery = new SimpleLightbox(".gallery a", {
    captions: true,
    captionData: "alt",
    captionPosition: "bottom",
    captionDelay: 250,    
});
gallery.on("show.simplelightbox", function(event) {
    event.preventDefault();
});

console.log(galleryItems);
