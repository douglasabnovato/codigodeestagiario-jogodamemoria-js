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
 let lockCard = false;

 function flipCard(){
    if(lockCard) return false;
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
     !isMatch ? disableCards(): resetCards();
 }

 function disableCards(){
     lockCard = true;
     setTimeout(() => { 
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetCards();
     }, 1000);
 }

 function resetCards(isMatch = false){
     if(isMatch){
         firstCard.removeEventListener('clip', flipCard);
         secondCard.removeEventListener('clip', flipCard);
     }
    [firstCard, secondCard, lockCard] = [null, null, false]
 }
 
 cards.forEach(card => card.addEventListener('click', flipCard));
