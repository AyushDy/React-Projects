import './App.css'
import Board from './components/Board'
import MyContextProvider from './contexts/GameContext'

function App() {
    return (
    <MyContextProvider>
    <Board />
    </MyContextProvider>
  )
}

export default App;
