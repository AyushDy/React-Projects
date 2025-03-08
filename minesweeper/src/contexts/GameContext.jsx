import { createContext } from "react";
import { useState,useEffect } from "react";

const GameContext = createContext();

const MycontextProvider = ({ children }) => {
    let rows = 10;
    let cols = 10;
    let mines = 15;

    const createBoard = (rows, cols, mines) => {
        const board = Array.from({length:rows},(_, row)=>
            Array.from({length:cols}, (_, col) => ({
                id: `${row}-${col}`,
                row: row,
                col: col,
                isMine: false,
                isReveal: false,
                isFlag: false,
                adjacent: 0
            }))
        )

        let minesPlanted = 0;

        while(minesPlanted < mines){
            const row = Math.floor(Math.random() * rows);
            const col = Math.floor(Math.random() * cols);

            if(!board[row][col].isMine){
                board[row][col].isMine = true;
                minesPlanted++;
            }
        }

        for(let i = 0;i< rows;i++){
            for(let j=0;j<cols;j++){
                if(board[i][j].isMine){
                    continue;
                }
                let count = 0;
                let dir = [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]];
                for(let k =0;k<dir.length;k++){
                    let newRow = i + dir[k][0];
                    let newCol = j + dir[k][1];
                    if(newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols && board[newRow][newCol].isMine){
                        count++;
                    }
                }
                if(count > 0){
                    board[i][j].adjacent = count;
                }
            }
        }
        return board;
    }

    const handleClick = (row, col) => {
        if(gameStatus === 'none'){
            setGameStatus('running');
        }

        if(gameStatus === 'won' || gameStatus === 'lost'){
            return;
        }

        if(board[row][col].isReveal || board[row][col].isFlag){
            return;
        }

        const newBoard = JSON.parse(JSON.stringify(board));

        if(newBoard[row][col].isMine){
            newBoard[row][col].isReveal = true;
            setBoard(newBoard);
            setGameStatus('lost');
            return;
        }

        if(newBoard[row][col].adjacent === 0){
            console.log("empty cell clicked");
            revealEmptyCells(newBoard, row, col);
        }else{
            newBoard[row][col].isReveal = true;
        }
        
        setBoard(newBoard);
        checkWin(newBoard);
    }

    const handleRightClick = (e, row, col) => {
        e.preventDefault();
        if(board[row][col].isReveal){
            return;
        }
        const newBoard = JSON.parse(JSON.stringify(board));
        if(newBoard[row][col].isFlag){
            setRemainingMines(remainingMines + 1);
            newBoard[row][col].isFlag = false;
        }else if(remainingMines > 0){
            setRemainingMines(remainingMines - 1);
            newBoard[row][col].isFlag = true;
        }

        setBoard(newBoard);
    }


    const revealEmptyCells = (newBoard, row, col) => {
        if(row < 0 || row >= rows || col < 0 || col >= cols){
            return;
        }
        if(newBoard[row][col].isReveal){
            return;
        }
        newBoard[row][col].isReveal = true;

        if(newBoard[row][col].isFlag){
            setRemainingMines(remainingMines + 1);
            newBoard[row][col].isFlag = false;
        }

        if(newBoard[row][col].adjacent > 0){
            return;
        }

        let dir = [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]];
        for(let i = 0; i < dir.length; i++){
            revealEmptyCells(newBoard, row + dir[i][0], col + dir[i][1]);
        }
    }

    const checkWin = (currentBoard) => {
        let win = true;
        for(let i = 0;i< rows;i++){
            for(let j = 0;j< cols;j++){
                if(!currentBoard[i][j].isReveal && !currentBoard[i][j].isMine){
                    win = false;
                    break;
                }
            }
        }
        if(win){
            setGameStatus('won');
        }
    }

    const handleRestart = () => {
        setBoard(createBoard(rows, cols, mines));
        setGameStatus('none');
        setTime(0);
        setRemainingMines(mines);
    }



    const [board, setBoard] = useState(createBoard(rows, cols, mines));
    const [gameStatus, setGameStatus] = useState('none');
    const [time, setTime] = useState(0);
    const [remainingMines, setRemainingMines] = useState(mines);

    useEffect(()=>{
        let timer
        if(gameStatus === 'running'){
            timer =  setInterval(()=>{
                setTime((time) => time + 1);
            },1000)
        }else{
            clearInterval(timer);
        }
        return () => clearInterval(timer);
    },[gameStatus]);


    const value = {
        board,
        time,
        gameStatus,
        remainingMines,
        handleClick,
        handleRightClick,
        handleRestart
    }

    return (
        <GameContext.Provider value={value}>
            {children}
        </GameContext.Provider>
    )
}


export default MycontextProvider;
export { GameContext };