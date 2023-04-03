function LabeledInput(props) {
    return (
        <section>
            <label>{props.label}</label>
            <input type={props.type} placeholder={props.placeholder} onChange={(e) => props.action(e.target.value)} />
        </section>
     );
}

export default LabeledInput;