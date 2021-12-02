import React from "react"

const HeadingM = (props) => {

    const Heading = () => {

        const text = props.headingContent.map((i) =>  <text key={i.id} >{i.m}</text> )
        return <h3>{text}</h3>
        
    }

    return(
        <Heading />
    )
}

export default HeadingM