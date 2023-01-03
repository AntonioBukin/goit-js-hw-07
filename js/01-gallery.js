import { galleryItems } from './gallery-items.js';
const galleryContainerImages = document.querySelector('.gallery');
const galleryMarkupImages = createGalleryItemsMarkup(galleryItems);

galleryContainerImages.insertAdjacentHTML('beforeend', galleryMarkupImages);
galleryContainerImages.addEventListener('click', onGalleryContainerClick);

function createGalleryItemsMarkup(array) {
    return array
        .map(({ preview, original, description }) => `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"/>
  </a>
</div>`)
        .join("");   
}

const instance = basicLightbox.create(
    `<img class="open-img" src="" width="800" height="600">`,
    {
        onShow: (instance) => {
            window.addEventListener("keydown", onEscKeyPress);
        },
            
        onClose: (instance) => {
            window.removeEventListener("keydown", onEscKeyPress);
        },
    }
);
    
function onGalleryContainerClick(event) {
    event.preventDefault();
    if (!event.target.classList.contains("gallery__image")) {
        return;
    }
    instance.show();
    const changeImg = document.querySelector(".open-img");
    changeImg.src = (event.target.dataset.source);    
}

function onEscKeyPress(event) {
    if (event.code === "Escape") {
        instance.close();
        return instance;  
    }
}

console.log();
console.log(galleryItems);

