import React from "react"
import { Link } from "gatsby"
import * as headerStyles from "./header.module.scss"


const Header = () => {
    return(
        <header className={headerStyles.header}>
            <div className={headerStyles.logo}>Logo</div>
            <nav className={headerStyles.nav}>
                <Link className={headerStyles.navLink} to="/">Home</Link>
                <Link className={headerStyles.navLink} to="/about">About</Link>
                <Link className={headerStyles.navLink} to="/contact">Contact</Link>
                <a href="/blog">Blog</a>
            </nav>


        </header>
    )
}

export default Header