import Item from "./Item"

function List() {
    return (
        <>
            <h2>Minha Lista REACT</h2>
            <ul>
                <li>Minha Lista REACT</li>
                <Item carro="Ferrari" anoLancamento={1985} />
                <Item carro="Fiat" anoLancamento={1964} />
                <Item carro="Renult" />
                <Item carro="Chevrolet" anoLancamento={1999} />
                <Item />
            </ul>
        </>
    )
}

export default List