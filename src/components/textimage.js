import React from "react"
import * as textimageStyles from "./textimage.module.scss" 

const TextImage = () => {

    const textimage = [
        { 
            id: 1, 
            title: 'Mit uns Vielfalt erleben', 
            description: 'Ganz gleich, wie umfangreich Ihr Medienmix ausfällt, unsere geschulten Mitarbeiter schneiden die Lösungen immer passend genau auf Ihre Bedürfnisse zu recht. So erhalten Sie immer eine perfekte Symbiose aus allen Kommunikationskanälen.', 
        }, 
 
        ]

    const getTextImageContent = textimage => {
        let content = [];

        for (let idx in textimage) {
          const item = textimage[idx];
          content.push(
            <div>
                <h1 key={item.id} className="sectionTitle">{item.title}</h1>
                <p className="text" key={item.id}>{item.description}</p>
                <div key={item.id} className={textimageStyles.textimage}></div>
            </div>
          );
        }
        return content;
    }



    return(
    <section className={textimageStyles.textimageSection}>
        {getTextImageContent(textimage)}
    </section>
    )
}

export default TextImage