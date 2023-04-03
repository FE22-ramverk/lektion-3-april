import { useContext, useState } from "react";
import { GamesContext } from "../App";
import LabeledInput from "./LabeledInput";
import PrimaryButton from "./PrimaryButton";

function AddGameSection() {
    const [title, setTitle] = useState('');
    const [creator, setCreator] = useState('');
    const [gameConsole, setGameConsole] = useState('');
    const [from, setFrom] = useState('');
    const [url, setUrl] = useState('');

    const [games, setGames] = useContext(GamesContext);

    function addNewGame(e) {

        e.preventDefault();
        let gameToAdd = {
            title: title,
            creator: creator,
            console: gameConsole,
            from: from,
            url: url
        }
        setGames([gameToAdd, ...games]);
        setTitle('');
        setGameConsole('');
        setCreator('');
        setFrom('');
        setUrl('');
    };

    return (
        <section className="addGameSection">
            <form>
                <LabeledInput label="Title" type="text" placeholder="Goat Simulator" action={setTitle} value={title}/>
                <LabeledInput label="Creator" type="text" placeholder="Coffe Stain Studios" action={setCreator} value={creator} />
                <LabeledInput label="Console" type="text" placeholder="PC" action={setGameConsole} value={gameConsole}/>
                <LabeledInput label="From" type="text" placeholder="Malek" action={setFrom} value={from} />
                <LabeledInput label="Image URL" type="text" placeholder="https://imageurl.jpg" action={setUrl} value={url} />
                <PrimaryButton title="ADD" action={addNewGame} />
            </form>
        </section>
    );
}

export default AddGameSection;