import Link from "next/link"

import styles from '../styles/Navbar.module.css'

export default function Navbar() {
    return (
        <div>
            <ul className={styles.navbar}>
                <li><Link href="/">Home</Link></li>
                <li>
                    <Link href="/products">Products</Link>
                    <ul>
                        <li>
                            <Link href='/products/pants'>Pants</Link>
                            <ul>
                                <li><Link href='/products/pants/redpant'>Red pant</Link></li>
                                <li><Link href='/products/pants/bluepant'>Blue pant</Link></li>
                            </ul>
                        </li>
                        <li><Link href='/products/shirt'>Shirts</Link></li>
                    </ul>
                </li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/anderson">Anderson</Link></li>
                <li><Link href="/todos">TodoLis</Link></li>
            </ul>
        </div>
    )
}