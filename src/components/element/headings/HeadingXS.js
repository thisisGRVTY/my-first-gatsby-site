import React from "react"

const HeadingXS = (props) => {

    const Heading = () => {

        const text = props.headingContent.map((i) =>  <text key={i.id} >{i.xs}</text> )
        return <h6>{text}</h6>
        
    }

    return(
        <Heading />
    )
}

export default HeadingXS