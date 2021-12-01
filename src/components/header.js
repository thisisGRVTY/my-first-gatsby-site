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
            </nav>
            <nav className={headerStyles.nav}>
                <a class="nav-link" href="/">Home</a>
                <a class="nav-link" href="/about">About</a>
                <a class="nav-link" href="/contact">Contact</a>
                <a class="nav-link" href="/blog">Blog</a>
            </nav>


        </header>
    )
}

export default Header