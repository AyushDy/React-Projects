import React from 'react'

const Cell = ({ cell, handleClick, handleRightClick}) => {
  return (
    <div className={`cell ${cell.isReveal ? 'reveal' : ''} ${cell.isFlag ? 'flag' : ''}`}
    onClick={cell.isReveal ? null : () => handleClick(cell.row, cell.col)}
    onContextMenu = {cell.isReveal ? null : (e) => handleRightClick(e, cell.row, cell.col)}
    >
    {cell.isReveal ? (cell.isMine ? '💣' : (cell.adjacent || '')) : cell.isFlag ? '🚩' : '' }
    </div>
  )
}

export default Cell;