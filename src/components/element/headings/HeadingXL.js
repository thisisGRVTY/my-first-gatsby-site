import React from "react"

const HeadingXL = (props) => {

    const Heading = () => {

        const text = props.headingContent.map((i) =>  <text key={i.id} >{i.xl}</text> )
        return <h1>{text}</h1>
    }

    return(
        <Heading />
    )
}

export default HeadingXL