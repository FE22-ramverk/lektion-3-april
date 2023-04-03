import { useContext } from "react";
import { GamesContext } from "../App";
import GameCard from "./GameCard";

function AddedGamesSection() {
    const [games] = useContext(GamesContext);
    return ( 
        <section className="addedGamesSection">
            <h2>ADDED GAMES</h2>
            {
                games.map((game, i) => <GameCard key={i} game={game} />)
            }
        </section>
     );
}

export default AddedGamesSection;