const playerOneRollBtn = document.querySelector('.player-one-roll-btn')
const playerOneDiceRoll = document.querySelector('.player-one-dice-roll')
const playerTwoRollBtn = document.querySelector('.player-two-roll-btn')
const playerTwoDiceRoll = document.querySelector('.player-two-dice-roll')

const playerOneColOne = document.querySelector('.player-one-col-one')
const playerOneColTwo = document.querySelector('.player-one-col-two')
const playerOneColThree = document.querySelector('.player-one-col-three')
const playerOneColOneTotal = document.querySelector('.player-one-col-one-total')
const playerOneColTwoTotal = document.querySelector('.player-one-col-two-total')
const playerOneColThreeTotal = document.querySelector('.player-one-col-three-total')
const playerOneScore = document.querySelector('.player-one-score')

const playerTwoColOne = document.querySelector('.player-two-col-one')
const playerTwoColTwo = document.querySelector('.player-two-col-two')
const playerTwoColThree = document.querySelector('.player-two-col-three')
const playerTwoColOneTotal = document.querySelector('.player-two-col-one-total')
const playerTwoColTwoTotal = document.querySelector('.player-two-col-two-total')
const playerTwoColThreeTotal = document.querySelector('.player-two-col-three-total')
const playerTwoScore = document.querySelector('.player-two-score')

let playerOneRoll = null

let playerOneColOneDice = []
let pOneColOneTotal = null


let playerOneColTwoDice = []
let pOneColTwoTotal = null

let playerOneColThreeDice = []
let pOneColThreeTotal = null

//Player 2
let playerTwoRoll = null

let playerTwoColOneDice = []
let pTwoColOneTotal = null


let playerTwoColTwoDice = []
let pTwoColTwoTotal = null

let playerTwoColThreeDice = []
let pTwoColThreeTotal = null




playerOneRollBtn.addEventListener('click', ()=>{
    playerOneRoll = rollDice()
    playerOneDiceRoll.innerText =  playerOneRoll
})

playerTwoRollBtn.addEventListener('click', ()=>{
    playerTwoRoll = rollDice()
    playerTwoDiceRoll.innerText = playerTwoRoll
})

playerOneColOne.addEventListener('click', ()=>{
    playerOneColOneDice.push(playerOneRoll)
    pOneColOneTotal = playerOneColOneDice.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    playerOneBoard()
})

playerOneColTwo.addEventListener('click', ()=>{
    playerOneColTwoDice.push(playerOneRoll)
    pOneColTwoTotal = playerOneColTwoDice.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    playerOneBoard()
})

playerOneColThree.addEventListener('click', ()=>{
    playerOneColThreeDice.push(playerOneRoll)
    pOneColThreeTotal = playerOneColThreeDice.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    playerOneBoard()
})

//player 2
playerTwoColOne.addEventListener('click', ()=>{
    playerTwoColOneDice.push(playerTwoRoll)
    pTwoColOneTotal = playerTwoColOneDice.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    playerTwoBoard()
})

playerTwoColTwo.addEventListener('click', ()=>{
    playerTwoColTwoDice.push(playerTwoRoll)
    pTwoColTwoTotal = playerTwoColTwoDice.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    playerTwoBoard()
})

playerTwoColThree.addEventListener('click', ()=>{
    playerTwoColThreeDice.push(playerTwoRoll)
    pTwoColThreeTotal = playerTwoColThreeDice.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    playerTwoBoard()
})



function rollDice(){
    const time = Date.now()
    return (Math.floor((time % 6) + 1))
}


function playerOneBoard(){
    document.querySelector('.player-one-col-one-dice-one').innerText = playerOneColOneDice[0] !== undefined ? playerOneColOneDice[0] : ''
    document.querySelector('.player-one-col-one-dice-two').innerText = playerOneColOneDice[1] !== undefined ? playerOneColOneDice[1] : ''
    document.querySelector('.player-one-col-one-dice-three').innerText = playerOneColOneDice[2] !== undefined ? playerOneColOneDice[2] : ''
    playerOneColOneTotal.innerText = pOneColOneTotal

    document.querySelector('.player-one-col-two-dice-one').innerText = playerOneColTwoDice[0] !== undefined ? playerOneColTwoDice[0] : ''
    document.querySelector('.player-one-col-two-dice-two').innerText = playerOneColTwoDice[1] !== undefined ? playerOneColTwoDice[1] : ''
    document.querySelector('.player-one-col-two-dice-three').innerText = playerOneColTwoDice[2] !== undefined ? playerOneColTwoDice[2] : ''
    playerOneColTwoTotal.innerText = pOneColTwoTotal 

    document.querySelector('.player-one-col-three-dice-one').innerText = playerOneColThreeDice[0] !== undefined ? playerOneColThreeDice[0] : ''
    document.querySelector('.player-one-col-three-dice-two').innerText = playerOneColThreeDice[1] !== undefined ? playerOneColThreeDice[1] : ''
    document.querySelector('.player-one-col-three-dice-three').innerText = playerOneColThreeDice[2] !== undefined ? playerOneColThreeDice[2] : ''
    playerOneColThreeTotal.innerText = pOneColThreeTotal

    playerOneScore.innerText = pOneColOneTotal + pOneColTwoTotal + pOneColThreeTotal

}

function playerTwoBoard(){
    document.querySelector('.player-two-col-one-dice-one').innerText = playerTwoColOneDice[0] !== undefined ? playerTwoColOneDice[0] : ''
    document.querySelector('.player-two-col-one-dice-two').innerText = playerTwoColOneDice[1] !== undefined ? playerTwoColOneDice[1] : ''
    document.querySelector('.player-two-col-one-dice-three').innerText = playerTwoColOneDice[2] !== undefined ? playerTwoColOneDice[2] : ''
    playerTwoColOneTotal.innerText = pTwoColOneTotal

    document.querySelector('.player-two-col-two-dice-one').innerText = playerTwoColTwoDice[0] !== undefined ? playerTwoColTwoDice[0] : ''
    document.querySelector('.player-two-col-two-dice-two').innerText = playerTwoColTwoDice[1] !== undefined ? playerTwoColTwoDice[1] : ''
    document.querySelector('.player-two-col-two-dice-three').innerText = playerTwoColTwoDice[2] !== undefined ? playerTwoColTwoDice[2] : ''
    playerTwoColTwoTotal.innerText = pTwoColTwoTotal 

    document.querySelector('.player-two-col-three-dice-one').innerText = playerTwoColThreeDice[0] !== undefined ? playerTwoColThreeDice[0] : ''
    document.querySelector('.player-two-col-three-dice-two').innerText = playerTwoColThreeDice[1] !== undefined ? playerTwoColThreeDice[1] : ''
    document.querySelector('.player-two-col-three-dice-three').innerText = playerTwoColThreeDice[2] !== undefined ? playerTwoColThreeDice[2] : ''
    playerTwoColThreeTotal.innerText = pTwoColThreeTotal

    playerTwoScore.innerText = pTwoColOneTotal + pTwoColTwoTotal + pTwoColThreeTotal

}