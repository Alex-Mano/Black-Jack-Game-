let cards = [] 
let sum = 0
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function getRandomInt(min, max) {
    // Math.random() gives a decimal between 0 and 1
    // Math.floor() rounds it down to the nearest whole integer
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sumCards (numbersArray){
    let total = 0
    for (var card of cards ) {
        total += card
    }
    return total
}

function newGame(){
    let cards = [] 
    sum = 0
    
}

function newCard (){
    cards.push(getRandomInt(1,10))
}

function gameLoop(){
    //asign cards
    newCard()   
    cardsEl.textContent = cards
    sum = sumCards(cards)
    sumEl.textContent = "Your total is: " + sum

    if (sum < 21) {
        messageEl.textContent = "You're still in the game! Draw antoher?"
    }
    else {
messageEl.textContent = "You're out!"
    }
    
    
    
    console.log(sum)
    
}
function newGame(){
    let cards = [] 
    sum = 0
    
}
