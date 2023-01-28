
const symbols = ['♣','♦','♥','♠']
const cardNumber = ['A','2','3','4','5','6','7','8','9','10','J','Q','K']



class Card {
    constructor(symbol,number){
        this.symbol = symbol;
        this.number = number;
        this.value
        if (number == 'A'){
            this.value = 1
        } else if (number == 'J'){
            this.value = 11
        } else if (number == 'Q'){
            this.value = 12
        } else if (number == 'K'){
            this.value = 13
        } else if (number == '2'){
            this.value = 2
        } else if (number == '3'){
            this.value = 3
        } else if (number == '4'){
            this.value = 4
        } else if (number == '5'){
            this.value = 5
        } else if (number == '6'){
            this.value = 6
        } else if (number == '7'){
            this.value = 7
        } else if (number == '8'){
            this.value = 8
        } else if (number == '9'){
            this.value = 9
        } else if (number == '10'){
            this.value = 10
        }
    }


}

var allCards = []

function newDeck() {
    
    var w = 0
    for (let i = 0; i < cardNumber.length; i++){
        allCards[w] = new Card (symbols[0],cardNumber[i])
        w++
    }
   
    for (let i = 0; i < cardNumber.length; i++){
        allCards[w] = new Card (symbols[1],cardNumber[i])
        w++
    }

    for (let i = 0; i < cardNumber.length; i++){
        allCards[w] = new Card (symbols[2],cardNumber[i])
        w++
    }

    for (let i = 0; i < cardNumber.length; i++){
        allCards[w] = new Card (symbols[3],cardNumber[i])
        w++
    }

}

newDeck()

console.log(allCards)

/////////////////


function shuffle() {
    allCards.sort((a,b) => Math.random() - .5)
}

shuffle()


var hand1 = []
var hand2 = []

function createHands() {
    var w = 0
    for (let i = 0; i < 26; i++){
        hand1.push(allCards[w])
        w++
    }
    for (let i = 0; i < 26; i++){
        hand2.push(allCards[w])
        w++
    }
}

createHands()


class Player {
    constructor(hand){
        this.hand = hand;
        this.points = 0;
    }
}   

let player1 = new Player(hand1)

let player2 = new Player(hand2)

//////////////////

function playGame(){
    console.log('Game Start!')
    for (let i = 0; i < 26; i++){
        console.log('Player 1 Plays: ' + player1.hand[i].number + player1.hand[i].symbol)
        console.log('Player 2 Plays: ' + player2.hand[i].number + player2.hand[i].symbol)
        if (player1.hand[i].value == player2.hand[i].value){
            console.log('Tie this round, no one gets points')
        } else if (player1.hand[i].value > player2.hand[i].value){
            console.log('Player 1 wins the round, they get a point!')
            player1.points += 1
        } else if (player2.hand[i].value > player1.hand[i].value) {
            console.log('Player 2 wins the round, they get a point!')
            player2.points += 1
        }
    
        console.log('Score: P1: ' + player1.points + ' P2: ' + player2.points)
    }
    if (player1.points > player2.points){
        console.log('Player 1 wins the game!  Final Score: Player 1: ' + player1.points + ' Player 2: ' + player2.points)
    } else if (player2.points > player1.points){
        console.log('Player 2 wins the game!  Final Score: Player 1: ' + player1.points + ' Player 2: ' + player2.points)
    } else if (player1.points == player2.points){
        console.log('Tie! Good Game!  Final Score: Player 1: ' + player1.points + ' Player 2: ' + player2.points)
    }
}

playGame()



