function Button(props) {
    // O componente para envia a função para o 
    // componente filho.
    return <button onClick={props.event}>{props.text}</button>
}

export default Button