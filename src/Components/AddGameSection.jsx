import LabeledInput from "./LabeledInput";
import PrimaryButton from "./PrimaryButton";

function AddGameSection() {
    return (
        <section className="addGameSection">
            <LabeledInput label="Title" type="text" placeholder="Goat Simulator" />
            <LabeledInput label="Creator" type="text" placeholder="Coffe Stain Studios" />
            <LabeledInput label="Console" type="text" placeholder="PC" />
            <LabeledInput label="From" type="text" placeholder="Malek" />
            <PrimaryButton title="ADD"/>
        </section>
    );
}

export default AddGameSection;