import './App.css'
import Board from './components/board'
import MyContextProvider from './contexts/GameContext'

function App() {
    return (
    <MyContextProvider>
    <Board />
    </MyContextProvider>
  )
}

export default App;
