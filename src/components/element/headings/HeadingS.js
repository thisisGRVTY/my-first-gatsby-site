import React from "react"

const HeadingS = (props) => {

    const Heading = () => {

        const text = props.headingContent.map((i) =>  <text key={i.id} >{i.s}</text> )
        return <h5>{text}</h5>
        
    }

    return(
        <Heading />
    )
}

export default HeadingS