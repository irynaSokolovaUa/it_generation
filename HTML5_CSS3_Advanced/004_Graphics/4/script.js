const images = [
    'https://24tv.ua/resources/photos/news/202212/2228438_16208237.jpg',
    'https://24tv.ua/resources/photos/news/202212/2228438_16208249.jpg',
    'https://24tv.ua/resources/photos/news/202212/2228438_16208248.jpg',
];

const container = document.getElementById('image-container')

images.forEach((image) => {
    const imgElement = document.createElement('img');
    imgElement.src = image;
    container.appendChild(imgElement);
});

let index = 0;

setInterval(() => {
    const prevImg = container.children[index === 0 ? images.length - 1 : index - 1];
    prevImg.style.border = 'none';

    const currImg = container.children[index];
    currImg.style.border = '3px solid red';

    index = (index + 1) % images.length;
}, 1000);