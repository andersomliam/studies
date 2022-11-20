function Form() {

    function enviarNome(e) {
        // Sem isso o form da um reload na tela e 
        // envia as informação para o backend
        // e não exculta o "console.log"
        e.preventDefault()
        console.log("Enviou um nome!!");    
    }

    return (
        <>
        <h2>Formulário</h2>
        <form onSubmit={enviarNome}>
            <input type="text" placeholder="Digite seu nome:"/>
            <input type="submit" value="ENVIAR"/>
        </form>
        </>
    )
}

export default Form