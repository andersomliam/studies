function Evento({numero}) {

    function meuEvento() {
        console.log(`Unsando texto e props: ${numero}`);
    }

    return (
        <>
            <p>Clique para disparar um EVENTO:</p>
            <button onClick={meuEvento}>..:: Clique Aqui ::..</button>
        </>
    )
}

export default Evento