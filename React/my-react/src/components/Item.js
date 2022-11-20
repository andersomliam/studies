import PropTypes from 'prop-types'

function Item({carro, anoLancamento}) {
    return (
        <>
            <li>{carro} - {anoLancamento}</li>
        </>
    )
}

Item.defaultProps = {
    carro: 'Faltou informar a Marca!',
    anoLancamento: 0,
}

Item.propTypes = {
    carro: PropTypes.string.isRequired,
    anoLancamento: PropTypes.number.isRequired,
}

export default Item