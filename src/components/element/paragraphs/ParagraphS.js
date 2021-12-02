import React from "react"

const ParagraphS = (props) => {

    const Paragraph = () => {

        const text = props.paragraphContent.map((i) =>  <text key={i.id} >{i.pS}</text> )
        return <p className="paragraph-small">{text}</p>
        
    }

    return(
        <Paragraph />
    )
}

export default ParagraphS