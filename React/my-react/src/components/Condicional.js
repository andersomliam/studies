import { useState } from 'react'

function Condicional() {
    
    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function enviarEmail(e) {
        e.preventDefault()
        setUserEmail(email)
        console.log(userEmail)
    }

    function limparEmail() {
        setUserEmail('')
    }

    return (
        <div>
            <h3>Cadastre seu e-mail:</h3>
            <form>
                <input 
                    type="email"  
                    placeholder="Digite seu e-mail" 
                    onChange={(e) => setEmail(e.target.value)}/>
            </form>
            <button type="submit" onClick={enviarEmail}> ..:: Salvar ::.. </button>

            {/* Aqui é uma condicional */}
            {userEmail && (
                <div>
                    <p>O e-mail do usuário é: {userEmail}</p>
                    <button onClick={limparEmail}>Limapar e-mail</button>
                </div>
            )}
        </div>
    )
}

export default Condicional