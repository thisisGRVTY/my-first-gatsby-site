import React from "react"
import Header from "./header"
import Footer from "./footer"
import "../styles/style.scss"

const Layout = props => {
    return(
        <div class="site-container">
            <Header />
            {props.children}
            <Footer />
        </div>
    )
}

export default Layout