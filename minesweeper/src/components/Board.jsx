import React from 'react'
import Cell from './Cell';
import { useContext } from 'react';
import { GameContext } from '../contexts/GameContext';
import BoardHeader from './BoardHeader';

const Board = () => {

    const {board,handleClick, handleRightClick, time, remainingMines, gameStatus, handleRestart} = useContext(GameContext);
    console.log("game context is",useContext(GameContext));

  return (
    <>
    <BoardHeader 
     time={time} 
     remainingMines={remainingMines} 
     gameStatus={gameStatus}
     handleRestart={handleRestart}
     />
    <div className='board' >
        {
            board.map((rowArr, i ) => {
                return (
                    <div key={i} className='row'>
                        {
                            rowArr.map((cell) => {
                                return (
                                <Cell 
                                key={cell.id}
                                cell={cell} 
                                handleClick={handleClick}
                                handleRightClick={handleRightClick}
                                  />)
                            })
                        }
                    </div>
                )
            })
        }
    </div>
    </>
  )
}

export default Board;

