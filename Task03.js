const gamespace = document.getElementById('gamespace')
const squares = document.getElementsByClassName('square')
const players = ['X', 'O']
let Player1 = players[0]
const endMessage = document.createElement('h2')
endMessage.textContent = `X's turn!`
endMessage.style.margin = '10px'
endMessage.style.textAlign='center'
gamespace.after(endMessage)

const winning_combinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

for(let i = 0; i < squares.length; i++){
    squares[i].addEventListener('click', () => {
        if(squares[i].textContent !== ''){
            return
        }
        squares[i].textContent = Player1
        if(checkWin(Player1)) {
            endMessage.textContent=`Game over! ${Player1} wins!`
            return
        }
        if(checkTie()) {
            endMessage.textContent= `Game is tied!`
            return
        }
        Player1 = (Player1 === players[0]) ? players[1] : players[0] 
        if(Player1 == players[0]) {
            endMessage.textContent= `X's turn!`
        } else {
            endMessage.textContent= `O's turn!`
        }     
    })   
}

function checkWin(Player1) {
    for(let i = 0; i < winning_combinations.length; i++){
        const [a, b, c] = winning_combinations[i]
        if(squares[a].textContent === Player1 && squares[b].textContent === Player1 && squares[c].textContent === Player1){
            return true
        }
    }
    return false
}

function checkTie(){
    for(let i = 0; i < squares.length; i++) {
        if(squares[i].textContent === '') {
            return false;
        }
    }
    return true
}

function restart() {
    for(let i = 0; i < squares.length; i++) {
        squares[i].textContent = ""
    }
    endMessage.textContent=`X's turn!`
    Player1 = players[0]
}
