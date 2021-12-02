import React from "react"

const HeadingL = (props) => {

    const Heading = () => {

        const text = props.headingContent.map((i) =>  <text key={i.id} >{i.l}</text> )
        return <h2>{text}</h2>
        
    }

    return(
        <Heading />
    )
}

export default HeadingL