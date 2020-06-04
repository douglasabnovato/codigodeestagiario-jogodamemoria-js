const cardBoard = document.querySelector("#cardboard");

const images = [
    'angular.svg',
    'aurelia.svg',
    'backbone.svg',
    'ember.svg',
    'react.svg',
    'vue.svg'
];

let cardHTML = '';

images.forEach(img => {
    cardHTML += `
        <div>
            <img src="img/${img}">
            <img src="img/js-badge.svg">
        </div>
    `
});