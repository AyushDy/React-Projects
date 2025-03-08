import React from 'react'

const BoardHeader = ({time, remainingMines, gameStatus,handleRestart}) => {

  return (
    <div className='board-header'>
        <p className='timer'>{`${Math.floor(time/60).toString().padStart(2,'0')}:${(time%60).toString().padStart(2,'0')}`}</p>
        <h1 className="game-status">
            {
                gameStatus === 'none' ? '🙂' : gameStatus === 'running' ? '😮' : gameStatus === 'won' ? '😎' : '😵'
                
            }
        </h1>
        <p className='mine-count'>🚩{remainingMines}</p>
        <button className="restart" onClick={handleRestart}>🔄Restart</button>
    </div>
  )
}

export default BoardHeader;