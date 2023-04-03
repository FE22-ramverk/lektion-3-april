import { useContext, useState } from "react";
import { GamesContext } from "../App";
import LabeledInput from "./LabeledInput";
import PrimaryButton from "./PrimaryButton";

function AddGameSection() {
    const [title, setTitle] = useState('');
    const [creator, setCreator] = useState('');
    const [gameConsole, setGameConsole] = useState('');
    const [from, setFrom] = useState('');

    const [games, setGames] = useContext(GamesContext);

    function addNewGame(e) {
        e.preventDefault();
        let gameToAdd = {
            title: title,
            creator: creator,
            console: gameConsole,
            from: from
        }
        setGames([gameToAdd, ...games]);
    };

    return (
        <section className="addGameSection">
            <form>
                <LabeledInput label="Title" type="text" placeholder="Goat Simulator" action={setTitle}/>
                <LabeledInput label="Creator" type="text" placeholder="Coffe Stain Studios" action={setCreator} />
                <LabeledInput label="Console" type="text" placeholder="PC" action={setGameConsole} />
                <LabeledInput label="From" type="text" placeholder="Malek" action={setFrom} />
                <PrimaryButton title="ADD" action={addNewGame} />
            </form>
        </section>
    );
}

export default AddGameSection;