let cards = [] 
let sum = 0
let messageEl = document.getElementById("messageEl");
let sumEl = document.getElementById("sumEl")

messageEl.textContent = "miau"

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

function gameLoop(){
    //asign cards
    cards.push(getRandomInt(1,10),getRandomInt(1,10))
    sum = sumCards(cards)
    sumEl.innerText = "Your total is: " + sum

    if (sum < 21) {
        messageEl.innerText = "You're still in the game! Draw antoher?"
    }
    
    
    
    console.log(sum)
    
}

gameLoop()

function newCard (){
    cards.push(getRandomInt(1,10))
}