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
let score = 0;
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
    owner_tablecard.classList.toggle('ownercard')

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
    pl_tablecard.classList.toggle('playercard')
}

// 賭大
function onBig() {
    let owner_table_card = document.getElementById('owner_tablecard')
    let pl_table_card = document.getElementById('pl_tablecard')
    owner_table_card.classList.toggle('backside')     // 翻面
    pl_table_card.classList.toggle('backside')     // 翻面

    let pl_num = parseInt(pl_card_num.innerHTML)
    let ow_num = parseInt(owner_card_num.innerHTML)
    
    // console.log(`${pl_num}&${ow_num}`)
    if (pl_num > ow_num) {
        winRound();
    } else if (pl_num == ow_num) {
        tieRound()
    } else {
        loseRound()
    }
    
}

// 賭小
function onSmall() {
    let owner_table_card = document.getElementById('owner_tablecard')
    let pl_table_card = document.getElementById('pl_tablecard')
    owner_table_card.classList.toggle('backside')     // 翻面
    pl_table_card.classList.toggle('backside')     // 翻面

    let pl_num = parseInt(pl_card_num.innerHTML)
    let ow_num = parseInt(owner_card_num.innerHTML)
    

    if (pl_num < ow_num) {
        winRound();
    } else if (pl_num == ow_num) {
        tieRound()
    } else {
        loseRound()
    }
}



/* -----------------------------------

        角色對話&計分

----------------------------------- */

function defaultWords() {
    let speech = document.querySelector('.owner_words')
    speech.innerHTML = `<p>Hehehe...</p>`
}
function annoyed() {
    let speech = document.querySelector('.owner_words')
    speech.innerHTML = `<p>嘿！不要把你的手在我臉前面揮來揮去的！</p>`
    setTimeout(defaultWords, 7000)
}
function winRound() {
    let speech = document.querySelector('.owner_words')
    let announce = document.querySelector('.game-set')

    announce.innerHTML = 'You Win!'
    speech.innerHTML = `<p>可惡！！！</p>`
    setTimeout(defaultWords, 5000)
    score += 1;
    return score;
}
function loseRound() {
    let speech = document.querySelector('.owner_words')
    let announce = document.querySelector('.game-set')

    announce.innerHTML = 'You Lose!'
    speech.innerHTML = `<p>哈哈哈哈哈</p>`
    setTimeout(defaultWords, 5000)
}
function tieRound() {
    let speech = document.querySelector('.owner_words')
    let announce = document.querySelector('.game-set')

    announce.innerHTML = 'Draw Again!'
    speech.innerHTML = `<p>再來！</p>`
    setTimeout(defaultWords, 5000)
}