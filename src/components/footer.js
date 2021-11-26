import React from "react"
import * as footerStyles from "./footer.module.scss"

const Footer = () => {
    return(
        <footer className={footerStyles.footer}>
                &copy; {new Date().getFullYear().toString()}{" "} <a href="https://systemedia.de">by Systemedia</a>
        </footer>
    )
}

export default Footer