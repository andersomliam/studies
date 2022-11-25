import { FaFacebook, FaInstagram, FaLinkedin, FaLinkedinIn } from 'react-icons/fa'

import style from './Footer.module.css'

function Footer() {

    return (
        <footer className={style.footer}>
            <ul>
                <li>
                    <FaFacebook />
                </li>
                <li>
                    <FaInstagram />
                </li>
                <li>
                    <FaLinkedin />
                </li>
                <li>
                    <FaLinkedinIn />
                </li>
            </ul>

            <p><span>Cost</span><sup>&copy;</sup> 2022 - Developed by Lima</p>
        </footer>
    )
}

export default Footer