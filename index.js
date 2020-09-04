var cardWeights;
var cardTypes;
var deck = new Array();
var drawn = new Array();
var cLeft = 52;

(function () {
    var cardWeights = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
    var cardTypes = ["Spades", "Hearts", "Diamonds", "Clubs"];
    var cards = new Array();

    function card(cardType, weight) {
        this.cardType = cardType;
        this.weight = weight;
    };

    function CreateDeck() {
        cardTypes.forEach(function (weight) {
            cardWeights.forEach(function (type) {
                cards.push(new card(type, weight));
            });
        });
    };

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function shuffleDeck(shuffleCnt) {
        for(var i = 0; i < shuffleCnt; i++) {
            var rndNo = getRandomInt(0, 51);
            var card = cards[i];
            cards[i] = cards[rndNo];
            cards[rndNo] = card;
        }
    }


    CreateDeck();
    console.log(cards);
    shuffleDeck(getRandomInt(10, 25));
    deck = cards;
    console.log(deck);
    console.log(cards);
})();

function draw(){
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    cLeft-=1;
    var rndNo = getRandomInt(0,deck.length-1);
    var drew = deck[rndNo];
    drawn.push(deck[rndNo]);
    deck.splice(rndNo,1);
    console.log(drew);
    if(cLeft<=0){
        console.log(deck);
    }
    document.getElementById("cards").innerHTML = deck[rndNo].cardType + " of " + deck[rndNo].weight;
}