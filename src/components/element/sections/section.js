import React from "react"

const Section = props => {
    return(
        <section className={props.sectionName}>
            {props.children}
        </section>
    )
}

export default Section