import Button from "./events/Button";

function Evento2() {

    function meuEvento() {
        console.log(`Unsando funcções em props. Segundo evento!`);
    }

    function meuEvento2(params) {
        console.log(`Unsando funcções em props. Terceiro evento!!!`);
    }

    return (
        <>
            <p>Clique para disparar um EVENTO-2:</p>
            <Button event={meuEvento} text='Evento-2' />
            <Button event={meuEvento2} text='Evento-3' />
        </>
    )
}

export default Evento2