import './App.css'
import AddedGamesSection from './Components/AddedGamesSection'
import AddGameSection from './Components/AddGameSection'
import Header from './Components/Header'

function App() {

  return (
    <div className="App">
      <Header title="FAVE GAMES" />
      <AddGameSection />
      <AddedGamesSection />
    </div>
  )
}

export default App
