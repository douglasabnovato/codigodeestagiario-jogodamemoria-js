/**
 * Rendização do HTML 
 */
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
        <div class="memory-card">
            <img class="front-face" src="img/${img}">
            <img class="back-face" src="img/js-badge.svg">
        </div>
    `
});

cardBoard.innerHTML = cardHTML + cardHTML;

/**
 * Rendização do HTML - FIM
 */

 const cards = document.querySelectorAll(".memory-card");

 function flipCard(){
     console.log(this);
 }

 cards.forEach(card => card.addEventListener('click', flipCard));
