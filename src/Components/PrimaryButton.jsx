function PrimaryButton(props) {
    return ( 
        <button onClick={(e) => {props.action(e)}}>{props.title}</button>
     );
}

export default PrimaryButton;