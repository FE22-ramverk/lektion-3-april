import { useState } from "react";
import LabeledInput from "./LabeledInput";
import PrimaryButton from "./PrimaryButton";

function AddGameSection() {
    const [title, setTitle] = useState('');
    const [creator, setCreator] = useState('');
    const [console, setConsole] = useState('');
    const [from, setFrom] = useState('');
    const [newGameObj, setNewGameObj] = useState({});

    function addNewGame(e) {
        e.preventDefault();
        let gameToAdd = {
            title: title,
            creator: creator,
            console: console,
            from: from
        }
        setNewGameObj(gameToAdd);
        alert(newGameObj.title);
    };

    return (
        <section className="addGameSection">
            <form>
                <LabeledInput label="Title" type="text" placeholder="Goat Simulator" action={setTitle}/>
                <LabeledInput label="Creator" type="text" placeholder="Coffe Stain Studios" action={setCreator} />
                <LabeledInput label="Console" type="text" placeholder="PC" action={setConsole} />
                <LabeledInput label="From" type="text" placeholder="Malek" action={setFrom} />
                <PrimaryButton title="ADD" action={addNewGame} />
            </form>
        </section>
    );
}

export default AddGameSection;