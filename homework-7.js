function showTemperature(city, temperature) {
  console.log(`Сейчас в ${city} температура — ${temperature} градусов по Цельсию`)
}

showTemperature('X', 'Y')

const LIGHT_SPEED = 299792458

function determineTypeSpeed(speed) {
  if(speed > LIGHT_SPEED){
    return 'Сверхсветовая скорость'
  } else if(speed === LIGHT_SPEED) {
    return 'Cкорость света'
  } else if(speed < LIGHT_SPEED){
    return 'Субсветовая скорость'
  }
}

let product = 'планшет'
let price = 1000

function purchaseProduct(budget){
  if(budget >= price){
    console.log(`${product} приобретён. Спасибо за покупку!`)
  } else{
    console.log(`Вам не хватает ${price-budget}$, пополните баланс`)
  }
}

function checkPhysicalConditionWater(temperature){
  if(temperature >= 100){
    console.log('Вода в газовом состоянии')
  } else if(temperature <= 0){
    console.log('Вода в твердом состоянии')
  } else if(temperature > 0 && temperature < 100){
    console.log('Вода в жидком состоянии')
  }
}

const SINUS_PI = 0
let weight = 70
let transportMode = 'самолет'