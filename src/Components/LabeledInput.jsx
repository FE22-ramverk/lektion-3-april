function LabeledInput(props) {
    return (
        <section>
            <label>{props.label}</label>
            <input type={props.type} placeholder={props.placeholder} />
        </section>
     );
}

export default LabeledInput;