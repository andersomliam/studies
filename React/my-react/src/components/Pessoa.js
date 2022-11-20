/* function Pessoa(props) {
    return (
        <div>
            <img src={props.foto} alt={props.name} />
            <h2>Nome: {props.name}</h2>
            <p>Idade: {props.year}</p>
            <p>Profissão: {props.job}</p>
        </div>

    )    
} */

function Pessoa({ name, year, job, foto }) {
    return (
        <div>
            <img src={foto} alt={name} width="150px"/>
            <h2>Nome: {name}</h2>
            <p>Idade: {year}</p>
            <p>Profissão: {job}</p>
        </div>
    )
}
export default Pessoa