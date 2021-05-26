import React from 'react'

function GameWinner({result,getWinnerStatus,restart}){


    function gameWinner(){
        let winnerStatus;
        if(result.player1 > result.player2){
         return winnerStatus = `Player 1 - ${getWinnerStatus(true)}`
        }else if(result.player1<result.player2){
         return winnerStatus = `Player 2 - ${getWinnerStatus(true)}`
    
        }else{
       return   winnerStatus = 'Draw'
        }
    }
    return(
        <div className='gameWinner'>
        <span>ჩვენ გვყავს თამაშის გამარჯვებულიიი.. და ეს არიისს ---- {gameWinner()}</span>
        <button onClick={restart}>Play again</button>
        </div>
    )
}

export default GameWinner