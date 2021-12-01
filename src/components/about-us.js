import React from "react"
import * as aboutusStyles from "./about-us.module.scss"


const AboutUs = () => {
    const AboutUs = [
        { 
            id: 1, 
            title: 'Wir über uns',
            description: 'Die Systemedia GmbH ist seit der Gründung 1978 ein erfolgreiches Medienunternehmen. Wir haben den Markt im Visier, erspüren Trends und Veränderungen. Mit dieser Zukunftsausrichtung und unserer Erfahrung analysieren wir Ihre Probleme und Aufgaben. Durch das Verknüpfen der drei Komponenten Mensch, Technik und Umwelt erzielen Sie mit Systemedia praxisnahe Lösungen.', 
        }, 
    ]

    const getAboutUs = AboutUs => {
        let content = [];
        
        for (let idx in AboutUs) {
            const item = AboutUs[idx];
            content.push( <h1 className="sectionTitle" key={item.id}>{item.title}</h1> );
        }
        return content;
    }

    const getAboutUsDescription = AboutUs => {
        let content = [];
        
        for (let idx in AboutUs) {
            const item = AboutUs[idx];
            content.push( <p className="text" key={item.id}>{item.description}</p> );
        }
        return content;
    }

    const getAboutUsContent = aboutContent => {
        let content = [];
        
        for (let idx in aboutContent) {
            const item = aboutContent[idx];
            content.push( 
                <div className={aboutusStyles.aboutContent}>
                    <h3 className="title" key={item.id}>{item.title}</h3>
                    <p className="text" key={item.id}>{item.description}</p>
                </div> 
            );
        }
        return content;
    }

    const aboutContent = [
        { 
            id: 1, 
            title: 'Mensch',
            description: 'Ein konkreter Ansprechpartner aus unserem Haus ist Ihr persönlicher Begleiter über alle Realisationsstufen hinweg. Ein eingespieltes Team aus Kreation, Realisierung und Produktion unterstützt ihn dabei, Timings und Budgets stets im Blick zu haben.', 
        }, 
        { 
            id: 2, 
            title: 'Technik',
            description: 'Neue Techniken und das Wissen, sie anzuwenden, sichern die Qualität, die Sie von einem gewissenhaften Partner erwarten. Die Technik wird zum Vehikel unserer Ideen. So erreichen wir die Ergebnisse, die alle begeistern.', 
        }, 
        { 
            id: 3, 
            title: 'Umwelt',
            description: 'Selbstverständlich stellen wir uns auch der gesellschaftlichen Verantwortung. Wir folgen und optimieren stetig den kompletten Produktionskreislauf der Umwelt zuliebe.', 
        }, 
    ]

    return(
        <section className="">
            <div className={aboutusStyles.about}>
                {getAboutUs(AboutUs)}
                {getAboutUsDescription(AboutUs)}
            </div>
            {getAboutUsContent(aboutContent)}
        </section>
    )
}

export default AboutUs