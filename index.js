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

const diceArr = [
"<img src='' alt='empty dice'/>",
"<img src='assets/d1.png' alt='dice one'/>",
"<img src='assets/d2.png' alt='dice two'/>",
"<img src='assets/d3.png' alt='dice three'/>",
"<img src='assets/d4.png' alt='dice four'/>",
"<img src='assets/d5.png' alt='dice five'/>",
"<img src='assets/d6.png' alt='dice six'/>"
]


//player 1
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


function getTotal(arr){
    if(arr.length === 1){
        return arr[0]
    }
    
    if(arr.length === 2){
        if(arr[0] === arr[1]){
            return (arr[0] + arr[1]) * 2
        }
        else{
            return arr[0] + arr[1]
        }
    }

    if(arr.length === 3){
        if(arr[0] === arr[1] && arr[0] === arr[2]){
            return (arr[0] + arr[1] + arr[2]) * 3
        }
        else if(arr[0] === arr[1]){
            return (arr[0] + arr[1]) * 2 + arr[2]
        }
        else if(arr[0] === arr[2]){
            return (arr[0] + arr[2]) * 2 + arr[1]
        }  
        else if(arr[1] === arr[2]){
            return (arr[1] + arr[2]) * 2 + arr[0]
        }  
        else{
            return arr[0] + arr[1] + arr[2]
        }
    }

    return null
}


//player 1///////////////////////////////////////////////////////
playerOneRollBtn.addEventListener('click', ()=>{
    playerOneRoll = rollDice()
    playerOneDiceRoll.innerHTML = diceArr[playerOneRoll]
})


playerOneColOne.addEventListener('click', ()=>{
    if(playerTwoColOneDice.includes(playerOneRoll)){
        playerTwoColOneDice = playerTwoColOneDice.filter(num => num !== playerOneRoll)
        pTwoColOneTotal = getTotal(playerTwoColOneDice)
    }
    
    if(playerOneColOneDice.length < 3){
        playerOneColOneDice.push(playerOneRoll)
        pOneColOneTotal = getTotal(playerOneColOneDice)
        playerOneDiceRoll.innerText =  null
    }

    playerBoard()
})

playerOneColTwo.addEventListener('click', ()=>{
    if(playerTwoColTwoDice.includes(playerOneRoll)){
        playerTwoColTwoDice = playerTwoColTwoDice.filter(num => num !== playerOneRoll)
        pTwoColTwoTotal = getTotal(playerTwoColTwoDice)    
    }


    if(playerOneColTwoDice.length < 3){
        playerOneColTwoDice.push(playerOneRoll)
        pOneColTwoTotal = getTotal(playerOneColTwoDice)
        playerOneDiceRoll.innerText =  null
    }

    playerBoard()
})

playerOneColThree.addEventListener('click', ()=>{
    if(playerTwoColThreeDice.includes(playerOneRoll)){
        playerTwoColThreeDice = playerTwoColThreeDice.filter(num => num !== playerOneRoll)
        pTwoColThreeTotal = getTotal(playerTwoColThreeDice)    
    }
    
    if(playerOneColThreeDice.length < 3){
        playerOneColThreeDice.push(playerOneRoll)
        pOneColThreeTotal = getTotal(playerOneColThreeDice)
        playerOneDiceRoll.innerText =  null
    }

    playerBoard()
})

//player 2/////////////////////////////////////////////////////////////////////////////////////
playerTwoRollBtn.addEventListener('click', ()=>{
    playerTwoRoll = rollDice()
    playerTwoDiceRoll.innerHTML = diceArr[playerTwoRoll]
})

playerTwoColOne.addEventListener('click', ()=>{
    if(playerOneColOneDice.includes(playerTwoRoll)){
        playerOneColOneDice = playerOneColOneDice.filter(num => num !== playerTwoRoll)
        pOneColOneTotal = getTotal(playerOneColOneDice)
    }
    
    if(playerTwoColOneDice.length < 3){
        playerTwoColOneDice.push(playerTwoRoll)
        pTwoColOneTotal = getTotal(playerTwoColOneDice)
        playerTwoDiceRoll.innerText =  null
    }

    playerBoard()
})

playerTwoColTwo.addEventListener('click', ()=>{
    if(playerOneColTwoDice.includes(playerTwoRoll)){
        playerOneColTwoDice = playerOneColTwoDice.filter(num => num !== playerTwoRoll)
        pOneColTwoTotal = getTotal(playerOneColTwoDice)
    }
    
    if(playerTwoColTwoDice.length < 3){
        playerTwoColTwoDice.push(playerTwoRoll)
        pTwoColTwoTotal = getTotal(playerTwoColTwoDice)
        playerTwoDiceRoll.innerText =  null
    }

    playerBoard()
})

playerTwoColThree.addEventListener('click', ()=>{
    if(playerOneColThreeDice.includes(playerTwoRoll)){
        playerOneColThreeDice = playerOneColThreeDice.filter(num => num !== playerTwoRoll)
        pOneColThreeTotal = getTotal(playerOneColThreeDice)
    }
    
    if(playerTwoColThreeDice.length < 3){
        playerTwoColThreeDice.push(playerTwoRoll)
        pTwoColThreeTotal = getTotal(playerTwoColThreeDice)
        playerTwoDiceRoll.innerText =  null
    }

    playerBoard()
})



function rollDice(){
    const time = Date.now()
    return (Math.floor((time % 6) + 1))
}



function playerBoard(){
    document.querySelector('.player-one-col-one-dice-one').innerHTML = playerOneColOneDice[0] !== undefined ? diceArr[playerOneColOneDice[0]] : ''
    document.querySelector('.player-one-col-one-dice-two').innerHTML = playerOneColOneDice[1] !== undefined ? diceArr[playerOneColOneDice[1]] : ''
    document.querySelector('.player-one-col-one-dice-three').innerHTML = playerOneColOneDice[2] !== undefined ? diceArr[playerOneColOneDice[2]] : ''
    playerOneColOneTotal.innerText = pOneColOneTotal

    document.querySelector('.player-one-col-two-dice-one').innerHTML = playerOneColTwoDice[0] !== undefined ? diceArr[playerOneColTwoDice[0]] : ''
    document.querySelector('.player-one-col-two-dice-two').innerHTML = playerOneColTwoDice[1] !== undefined ? diceArr[playerOneColTwoDice[1]] : ''
    document.querySelector('.player-one-col-two-dice-three').innerHTML = playerOneColTwoDice[2] !== undefined ? diceArr[playerOneColTwoDice[2]] : ''
    playerOneColTwoTotal.innerText = pOneColTwoTotal 

    document.querySelector('.player-one-col-three-dice-one').innerHTML = playerOneColThreeDice[0] !== undefined ? diceArr[playerOneColThreeDice[0]] : ''
    document.querySelector('.player-one-col-three-dice-two').innerHTML = playerOneColThreeDice[1] !== undefined ? diceArr[playerOneColThreeDice[1]] : ''
    document.querySelector('.player-one-col-three-dice-three').innerHTML = playerOneColThreeDice[2] !== undefined ? diceArr[playerOneColThreeDice[2]] : ''
    playerOneColThreeTotal.innerText = pOneColThreeTotal

    playerOneScore.innerText = pOneColOneTotal + pOneColTwoTotal + pOneColThreeTotal

    document.querySelector('.player-two-col-one-dice-one').innerHTML = playerTwoColOneDice[0] !== undefined ? diceArr[playerTwoColOneDice[0]] : ''
    document.querySelector('.player-two-col-one-dice-two').innerHTML = playerTwoColOneDice[1] !== undefined ? diceArr[playerTwoColOneDice[1]] : ''
    document.querySelector('.player-two-col-one-dice-three').innerHTML = playerTwoColOneDice[2] !== undefined ? diceArr[playerTwoColOneDice[2]] : ''
    playerTwoColOneTotal.innerText = pTwoColOneTotal

    document.querySelector('.player-two-col-two-dice-one').innerHTML = playerTwoColTwoDice[0] !== undefined ? diceArr[playerTwoColTwoDice[0]] : ''
    document.querySelector('.player-two-col-two-dice-two').innerHTML = playerTwoColTwoDice[1] !== undefined ? diceArr[playerTwoColTwoDice[1]] : ''
    document.querySelector('.player-two-col-two-dice-three').innerHTML = playerTwoColTwoDice[2] !== undefined ? diceArr[playerTwoColTwoDice[2]] : ''
    playerTwoColTwoTotal.innerText = pTwoColTwoTotal 

    document.querySelector('.player-two-col-three-dice-one').innerHTML = playerTwoColThreeDice[0] !== undefined ? diceArr[playerTwoColThreeDice[0]] : ''
    document.querySelector('.player-two-col-three-dice-two').innerHTML = playerTwoColThreeDice[1] !== undefined ? diceArr[playerTwoColThreeDice[1]] : ''
    document.querySelector('.player-two-col-three-dice-three').innerHTML = playerTwoColThreeDice[2] !== undefined ? diceArr[playerTwoColThreeDice[2]] : ''
    playerTwoColThreeTotal.innerText = pTwoColThreeTotal

    playerTwoScore.innerText = pTwoColOneTotal + pTwoColTwoTotal + pTwoColThreeTotal

}