import React from "react"
import * as footerStyles from "./footer.module.scss"

const Footer = () => {
    return(
        <footer className={footerStyles.footer}>
                <h4>
                    <a href="https://systemedia.de"> &copy; {new Date().getFullYear().toString()}{" "} by Systemedia</a>
                </h4>
        </footer>
    )
}

export default Footer