import React from "react"
import * as werteStyles from "./werte.module.scss" 

const Werte = () => {

    const title = [
        { 
            id: 1, 
            title: '"MIT HERZ UND VERSTAND FÜR IHREN ERFOLG."', 
        }, 
    ]
    const getWerteTitle = title => {
        let content = [];
        
        for (let idx in title) {
            const item = title[idx];
            content.push( <h1 key={item.id} className="sectionTitle">{item.title}</h1> );
        }
        return content;
    }


    const werte = [
        { 
            id: 1, 
            title: 'Unsere Werte', 
            description: 'Wir sehen unsere Kunden nicht als eine abstrakte Masse, sondern als wichtige Partner. Diese Partnerschaft sollte so gestaltet sein, dass beide Seiten Erfolg daraus schöpfen. Deshalb ist uns ein offener und direkter Umgang mit unseren Partnern wichtig, in dem keine Fragen offen bleiben und das gemeinsame Ziel und diese Werte im Vordergrund stehen.', 
        }, 
        { 
            id: 2, 
            title: 'Unser Service', 
            description: 'Bei uns erleben Sie umfassenden Service. Deshalb haben Sie einen persönlichen Ansprechpartner, ganz gleich, wie umfassend der Medienmix ausfällt. Der direkte Kontakt ist trotz aller modernen Kommunikation nicht zu ersetzen. Schnelle Abstimmungen vor Ort unterstützen Sie und schaffen Ihnen Freiräume.', 
        }, 
    ]
    const getWerteContent = werte => {
        let content = [];
        
        for (let idx in werte) {
            const item = werte[idx];
            content.push(
                <div className={werteStyles.werteContent}>
                <h3 key={item.id} className="title">{item.title}</h3>
                <p className="text" key={item.id}>{item.description}</p>
            </div>
          );
        }
        return content;
    }

    
    const stärkenTitle = [
        { 
            id: 1, 
            title: 'Unsere Stärken', 
        }, 
    ]
    const getStärkeTitle = stärkenTitle => {
        let content = [];

        for (let idx in stärkenTitle) {
          const item = stärkenTitle[idx];
          content.push( <h3 key={item.id} className="title">{item.title}</h3> );
        }
        return content;
    }

    
    const stärken = [
        { 
            id: 1, 
            stärkeTitle: 'Entwicklung', 
            stärkeLevel: '10%', 
        }, 
        { 
            id: 2, 
            stärkeTitle: 'Design', 
            stärkeLevel: '52%', 
        }, 
        { 
            id: 3, 
            stärkeTitle: 'Marketing', 
            stärkeLevel: '25%', 
        }, 
        { 
            id: 4, 
            stärkeTitle: 'Beratung', 
            stärkeLevel: '33%', 
        }, 
        { 
            id: 5, 
            stärkeTitle: 'Eintsatzfreude', 
            stärkeLevel: '82%', 
        }, 
    ]
    const getStärkeContent = stärken => {
        let content = [];

        for (let idx in stärken) {
          const item = stärken[idx];
          content.push(
                <div className={werteStyles.skillbar}>
                    <div className={werteStyles.skillDescription}>
                        <p className="text stärkeTitle" key={item.id}>{item.stärkeTitle}</p>
                        <p className="text stärkeTitle" key={item.id}>{item.stärkeLevel}</p>
                    </div>
                    <div className={werteStyles.bar}>
                        <span style={{width: `${item.stärkeLevel}` }} key={item.id} className={werteStyles.barBG}></span>
                    </div>
                </div>
          );
        }
        return content;
    }

    return(
    <section>
        {getWerteTitle(title)}
        {getWerteContent(werte)}
        {getStärkeTitle(stärkenTitle)}
        {getStärkeContent(stärken)}
    </section>
    )
}

export default Werte