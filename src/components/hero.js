import React from "react"
import * as heroStyles from "./hero.module.scss" 


const Hero = () => {
    return(
        <div className={heroStyles.hero}>
            <div className={heroStyles.heroImage}></div>
            <div className={heroStyles.overlay}></div>
            <div className={heroStyles.heroContent}>
                <h1>Headline</h1>
                <h2>Subline</h2>
            </div>
        </div>
    )
}

export default Hero