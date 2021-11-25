import React from "react"

const Footer = () => {
    return(
        <footer>
                &copy; {new Date().getFullYear().toString()}{" "} <a href="https://systemedia.de">by Systemedia</a>
        </footer>
    )
}

export default Footer