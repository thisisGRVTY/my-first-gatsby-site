import React from "react"

const ParagraphM = (props) => {

    const Paragraph = () => {

        const text = props.paragraphContent.map((i) =>  <text key={i.id} >{i.pM}</text> )
        return <p className="paragraph-medium">{text}</p>
        
    }

    return(
        <Paragraph />
    )
}

export default ParagraphM