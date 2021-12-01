import React from "react"
import * as nachhaltigStyles from "./nachhaltig.module.scss"

const Nachhaltig = () => {
    const NachhaltigContent = [
        { 
            id: 1, 
            title: 'Die Zukunft ist uns wichtig. Wir produzieren nachhaltig.',
            description: 'Wir setzen uns verantwortungsvoll für die Umwelt ein. Gerne bieten wir Ihnen eine umweltschonende Lösung für Ihre Druckprodukte an. Informieren Sie sich bei uns über die Möglichkeiten.', 
        }, 
    ]
    const getNachhaltig = NachhaltigContent => {
        let content = [];
        
        for (let idx in NachhaltigContent) {
            const item = NachhaltigContent[idx];
            content.push( <h1 class="sectionTitle"key={item.id}>{item.title}</h1> );
        }
        return content;
    }

    const getNachhaltigDescription = NachhaltigContent => {
        let content = [];
        
        for (let idx in NachhaltigContent) {
            const item = NachhaltigContent[idx];
            content.push( <p className="text" key={item.id}>{item.description}</p> );
        }
        return content;
    }

    const NachhaltigBadges = () => {
        return(
            <div className="badges">
                <div className={nachhaltigStyles.badge}></div>
                <div className={nachhaltigStyles.badge}></div>
            </div>
            
        )
    }

    return(
        <section className="">
            {getNachhaltig(NachhaltigContent)}
            {getNachhaltigDescription(NachhaltigContent)}
            <NachhaltigBadges />
        </section>
    )
}

export default Nachhaltig