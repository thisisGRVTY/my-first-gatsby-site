import React from "react"

const ParagraphL = (props) => {

    const Paragraph = () => {

        const text = props.paragraphContent.map((i) =>  <text key={i.id} >{i.pL}</text> )
        return <p className="paragraph-large">{text}</p>
        
    }

    return(
        <Paragraph />
    )
}

export default ParagraphL