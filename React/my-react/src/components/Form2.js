import {useState} from 'react'

function Form2() {

    function enviarNome(e) {
        // Sem isso o form da um reload na tela e 
        // envia as informação para o backend
        // e não exculta o "console.log"
        e.preventDefault()
        console.log(`Usuário ${name} enviado com a senha ${password}`);
        console.log("SUCESSO!!");    
    }

    const [name, setName] = useState('Lima') // valor default
    const [password, setpassword] = useState()
 
    return (
        <>
            <h2>Formulário useState</h2>
            <form onSubmit={enviarNome}>
                <div>
                    <input
                        type="text"
                        id="name" 
                        name="name"
                        value={name}
                        placeholder="Digite seu nome:"
                        onChange={(e) => setName(e.target.value)}
                        />
                </div>
                <div>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Digite uma senha:"
                        onChange={(e) => setpassword(e.target.value)}
                        />
                </div>            
                <div><input type="submit" value="ENVIAR"/></div>
            </form>
        </>
    )
}

export default Form2