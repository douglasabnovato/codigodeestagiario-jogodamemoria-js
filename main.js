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
        <div class="memory-card" data-card="${img}">
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

 let firstCard, secondCard;

 function flipCard(){
    this.classList.add("flip");
    if(!firstCard){
        firstCard = this;
        return false;
    }
    secondCard = this;
    checkForMatch();
 }

 function checkForMatch(){
     let isMatch = firstCard.dataset.card === secondCard.dataset.card;
     !isMatch ? disableCards(): true;
 }

 function disableCards(){
     setTimeout(() => { 
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
     }, 1000);
 }
 
 cards.forEach(card => card.addEventListener('click', flipCard));
