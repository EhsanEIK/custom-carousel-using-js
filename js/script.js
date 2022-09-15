const images = [
    'image-1.jpg',
    'image-2.jpg',
    'image-3.jpg',
    'image-4.jpg',
    'image-5.jpg',
];

const imgCarousel = document.getElementById('img-carousel');
let imgIndex = 0;
setInterval(() => {
    if (imgIndex === images.length) {
        imgIndex = 0;
    }
    console.log(typeof images[imgIndex]);
    imgCarousel.setAttribute('src', `./images/${images[imgIndex]}`);

    imgIndex++;
}, 1500);