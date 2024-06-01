class CardDeck {
    constructor(symbol, number) {
        this.symbol = symbol
        this.number = number
    }
    cardSymbol() {
        // ♠︎♥︎♦︎♣︎
        switch(this.symbol) {
            case 1:
                return '♠︎'
            case 2:
                return '♥︎'
            case 3:
                return '♦︎'
            case 4: 
                return '♣︎'
        }
    }
}

let deck = deckInit()
deckShuffle(deck)
console.log(deck)

// 創建牌組
function deckInit() {
    let deck = [];
    for (let symbol = 1; symbol <= 4; symbol++) {
        for (let number = 1; number <= 13; number++) {
            let x = new CardDeck(symbol, number);
            deck.push(x)
        }
    }
    return deck;
}

// 洗牌
function deckShuffle(array) {
    let currentIndex = array.length
    while (currentIndex !== 0) {
        let randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex -= 1;

        temp = array[currentIndex]
        array[currentIndex] = array[randomIndex]
        array[randomIndex] = temp
    }
    return array
}

// 發牌
function drawCard() {
    ownercard = document.getElementById('owners_card')
    plscard = document.getElementById('pls_card')
    let announce = document.querySelector('.game-set')
    ownercard.innerHTML = ''
    plscard.innerHTML = ''
    announce.innerHTML = `&nbsp;`

    owner = deck.shift()
    ownercard.innerHTML = `
        <div id="owner_tablecard" class="card flip-card click backside">
            <div class="innerCard">
                <div class="front">
                    <div id="owner_card_smb" class="symbol">${owner.cardSymbol()}</div>
                    <div id="owner_card_num" class="nums">${owner.number}</div>
                </div>
                <div class="back"></div>
            </div>
        </div>
    `

    let player = deck.shift()
    console.log(`${player.cardSymbol()}${player.number} vs ${owner.cardSymbol()}${owner.number}`)

    plscard.innerHTML = `
        <div id="pl_tablecard" class="card flip-card click backside">
            <div class="innerCard">
                <div class="front">
                    <div id="pl_card_smb" class="symbol">${player.cardSymbol()}</div>
                    <div id="pl_card_num" class="nums">${player.number}</div>
                </div>
                <div class="back"></div>
            </div>
        </div>
    `
}

function onBig() {
    let owner_table_card = document.getElementById('owner_tablecard')
    let pl_table_card = document.getElementById('pl_tablecard')
    owner_table_card.classList.toggle('backside')     // 翻面
    pl_table_card.classList.toggle('backside')     // 翻面

    let pl_num = parseInt(pl_card_num.innerHTML)
    let ow_num = parseInt(owner_card_num.innerHTML)
    
    // console.log(`${pl_num}&${ow_num}`)
    let speech = document.querySelector('.owner_words')
    let announce = document.querySelector('.game-set')

    if (pl_num > ow_num) {
        announce.innerHTML = 'You Win!'
        speech.innerHTML = `<p>可惡！！！</p>`
        setTimeout(defaultWords, 5000)
    } else if (pl_num == ow_num) {
        announce.innerHTML = 'Draw Again!'
        speech.innerHTML = `<p>再來！</p>`
        setTimeout(defaultWords, 5000)
    } else {
        announce.innerHTML = 'You Lose!'
        speech.innerHTML = `<p>哈哈哈哈哈</p>`
        setTimeout(defaultWords, 5000)
    }
    
}
function onSmall() {
    let owner_table_card = document.getElementById('owner_tablecard')
    let pl_table_card = document.getElementById('pl_tablecard')
    owner_table_card.classList.toggle('backside')     // 翻面
    pl_table_card.classList.toggle('backside')     // 翻面

    let pl_num = parseInt(pl_card_num.innerHTML)
    let ow_num = parseInt(owner_card_num.innerHTML)
    
    let speech = document.querySelector('.owner_words')
    let announce = document.querySelector('.game-set')

    if (pl_num < ow_num) {
        announce.innerHTML = 'You Win!'
        speech.innerHTML = `<p>可惡！！！</p>`
        setTimeout(defaultWords, 5000)
    } else if (pl_num == ow_num) {
        announce.innerHTML = 'Draw Again!'
        speech.innerHTML = `<p>再來！</p>`
        setTimeout(defaultWords, 5000)
    } else {
        announce.innerHTML = 'You Lose!'
        speech.innerHTML = `<p>哈哈哈哈哈</p>`
        setTimeout(defaultWords, 5000)
    }
}


function defaultWords() {
    let speech = document.querySelector('.owner_words')
    speech.innerHTML = `<p>Hehehe...</p>`
}

/*
let card = cardInit()
cardShuffle(card);

function cardInit() {
    let card = []
    for (cat of ["♠︎", "♥︎", "♦︎", "♣︎"]) {
        for (i = 2; i <= 10; i++) {
            card.push(`${cat}${i}`)
        }
        for (symbol of ['J', 'Q', 'K', 'A']) {
            card.push(`${cat}${symbol}`)
        }
    }
    return card;
}
function cardShuffle(card) {
    for (i = card.length - 1; i > 0; i--) {
        let x = parseInt(Math.random() * (i + 1))
        let temp = card[i]
        card[i] = card[x]
        card[x] = temp
    }
    console.log(card);
}

function drawCard() {
    let owner = card.splice(0, 1);
    let player = card.splice(0, 1)
    console.log(owner)
    console.log(player)
} 
*/