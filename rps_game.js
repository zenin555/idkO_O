var gestures=['paper','scissor','stone']

function rpsS() {
    com = gestures[Math.floor(Math.random()*3)];
    player = 'scissor'
    console.log(com)

    if (player == com) {
        console.log('平手')
    } else if(com == "stone") {
        console.log('輸ㄌ')
    } else if(com == "paper") {
        console.log("贏ㄌ")
    }
}

function rpsR() {
    com = gestures[Math.floor(Math.random()*3)];
    player = 'stone'
    console.log(com)

    if (player == com) {
        console.log('平手')
    } else if(com == "paper") {
        console.log('輸ㄌ')
    } else if(com == "scissor") {
        console.log("贏ㄌ")
    }
}

function rpsP() {
    com = gestures[Math.floor(Math.random()*3)];
    player = 'paper'
    console.log(com)

    if (player == com) {
        console.log('平手')
    } else if(com == "scissor") {
        console.log('輸ㄌ')
    } else if(com == "stone") {
        console.log("贏ㄌ")
    }
}
