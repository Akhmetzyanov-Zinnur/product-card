const productCards = document.querySelectorAll(".product__item");
const firstCardRepaintButton = document.querySelector("#first-card-repaint-button");

if(firstCardRepaintButton){
  firstCardRepaintButton.addEventListener('click', () => {
    if(productCards.length > 0){
      productCards[0].classList.toggle('product__item--violet');
    }
  })
}

const allCardsRepaintButton = document.querySelector("#all-cards-repaint-button");
if(allCardsRepaintButton){
  allCardsRepaintButton.addEventListener('click', () => {
    if(productCards.length > 0){
      productCards.forEach((card) => {
        card.classList.toggle('product__item--orange')
      })
    }
  })
}

const openGoogleButton = document.querySelector('#open-google-button');
const googleURL = ('https://google.com')
openGoogleButton.addEventListener('click', () => {
  window.open(googleURL)
})

const outputConsoleLogButton = document.querySelector('#output-console-log-button')
outputConsoleLogButton.addEventListener('click', () => outputConsole('вы нажали на кнопку'))

function outputConsole(message){
  alert(message)
  console.log(message)
}

const mainTittle = document.querySelector('#main-tittle')
mainTittle.addEventListener('mouseenter', () => console.log('вы навели курсор на главный заголовок'))

const repaintButton = document.querySelector('#repaint-button')
repaintButton.addEventListener('click', () =>{
  repaintButton.classList.toggle('green-button')
})

