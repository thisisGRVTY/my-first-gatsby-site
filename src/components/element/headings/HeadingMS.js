import React from "react"

const HeadingMS = (props) => {

    const Heading = () => {

        const text = props.headingContent.map((i) =>  <text key={i.id} >{i.ms}</text> )
        return <h4>{text}</h4>
        
    }

    return(
        <Heading />
    )
}

export default HeadingMS