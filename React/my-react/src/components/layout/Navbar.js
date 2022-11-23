import { Link } from 'react-router-dom'
import style from './Navbar.module.css'

function Navbar() {

    return (
        <>
            <ul className={style.navList}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/empresa">Empresa</Link>
                </li>
                <li>
                    <Link to="/contato">Contato</Link>
                </li>
            </ul>

            <hr></hr>
        </>
    )
}

export default Navbar