import React from "react"
import * as eckdatenStyles from "./eckdaten.module.scss"

const Eckdaten = () => {
    const title = [
        { 
            id: 1, 
            title: 'Eckdaten', 
        }, 
    ]

    
    const getEckdatenTitle = title => {
        let content = [];
        
        for (let idx in title) {
            const item = title[idx];
            content.push( <h1 key={item.id} className="sectionTitle">{item.title}</h1> );
        }
        return content;
    }
    const eckdaten = [
        { 
            id: 1, 
            title: 'Gründungsjahr', 
            description: '1978', 
        }, 
        { 
            id: 2, 
            title: 'Service und Leidenschaft', 
            description: '100%', 
        }, 
        { 
            id: 3, 
            title: 'Motivierte Mitarbeiter', 
            description: '35', 
        }, 
        { 
            id: 4, 
            title: 'Zufriedene Kunden', 
            description: '98%', 
        }, 
    ]
    
    const getEckdatenContent = eckdaten => {
        let content = [];
        
        for (let idx in eckdaten) {
            const item = eckdaten[idx];
            content.push(
                <div className={eckdatenStyles.eckdatenContent}>
                    <div className={eckdatenStyles.eckdatenIcon}></div>
                    <div className={eckdatenStyles.eckdatenDescription}>
                        <h4 key={item.id}>{item.title}</h4>
                        <p className="text"  key={item.id}>{item.description}</p>
                    </div>
                </div>
            );
        }
        return content;
    }

    return(
    <section className={eckdatenStyles.eckdaten}>
        {getEckdatenTitle(title)}
        {getEckdatenContent(eckdaten)}
    </section>
    )
}

export default Eckdaten