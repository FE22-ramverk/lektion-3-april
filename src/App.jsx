import { useEffect, useState, createContext } from 'react';
import './App.css'
import AddedGamesSection from './Components/AddedGamesSection'
import AddGameSection from './Components/AddGameSection'
import Header from './Components/Header'

export const GamesContext = createContext();

function App() {
  const API_URL = "https://majazocom.github.io/Data/favegames.json";
  const [games, setGames] = useState([]);

  useEffect(() => {
    // vad som skall hända vid rendering av App-komponenten
    fetch(API_URL)
      .then(response => response.json())
      .then(data => setGames(data))
      .catch(error => console.error(error))
  }, []);

  return (
    <div className="App">
      <GamesContext.Provider value={[games, setGames]}>
        <Header title="FAVE GAMES" />
        <AddGameSection />
        <AddedGamesSection />
      </GamesContext.Provider>
    </div>
  )
}

export default App
