import React from "react"
import * as heroStyles from "./hero.module.scss" 


const Hero = (props) => {

    const HeroImage = () => {
        return <div className={heroStyles.heroImage}></div>
    }
    
    const HeroContent = () => {
        
        const headlineHero = props.heroContent.map((hero) =>  <h1 key={hero.id} >{hero.title}</h1> )
        const sublineHero = props.heroContent.map((hero) =>  <h2 key={hero.id} >{hero.subtitle}</h2> )

        return (
            <div className={heroStyles.heroContent}>
                {headlineHero}
                {sublineHero}
            </div>
        )
    }

    return(
        <div className={heroStyles.hero}>
            <HeroImage />
            <HeroContent />
        </div>
    )
}

export default Hero