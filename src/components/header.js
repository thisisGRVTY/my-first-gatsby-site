import React from "react"
import { Link } from "gatsby"
import * as headerStyles from "./header.module.scss"

const Header = () => {
    return(
        <header className={headerStyles.header}>
                <Link className={headerStyles.navLink} to="/">Home</Link>
                <Link className={headerStyles.navLink} to="/blog">Blog</Link>
                <Link className={headerStyles.navLink} to="/about">About</Link>
                <Link className={headerStyles.navLink} to="/contact">Contact</Link>
        </header>
    )
}

export default Header