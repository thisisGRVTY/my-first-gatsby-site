import React from "react"
import * as serviceStyles from "./service.module.scss" 

function Services() {

  const services = [
  { 
      id: 1, 
      title: 'Kreation.', 
      description: 'Beginnend mit der Konzipierung Ihres Corporate Designs, über die Entwicklung Ihres Logos und maßgeschneiderten Ideen, bis hin zum kreativen Gesamtentwurf. Erfahren Sie mehr und lassen sich von unserer Kreativität beeindrucken.', 
  }, 
  { 
      id: 2, 
      title: 'Publishing.', 
      description: 'Hochperformante und professionelle Umsetzung in der Reinzeichnung, dazu digitale Bildbearbeitung in allen Facetten, ein stimmiges Layout, datenbankgestützte Seitenproduktion – mit modernster Technik sind Sie mit uns auf dem besten Weg.', 
  }, 
  { 
      id: 3, 
      title: 'Web-Solution.', 
      description: 'Spezialisiert bei der Erstellung von Webseiten mit WordPress und TYPO3, programmieren wir kundennahe Lösungen. Auf Ihre Anforderung abgestimmt, realisieren wir zielgerichtet individuelle Eigenprogrammierungen.', 
  }, 
  { 
      id: 4, 
      title: 'Internet-Marketing.', 
      description: 'Egal ob Search Engine Marketing, Webanalyse, Webseitenoptimierung oder Social Media, unsere Spezialisten im Bereich Internet-Marketing sorgen dafür, dass Sie im Internet bestens aufgestellt sind. Wir drehen auch hier die richtigen Stellschrauben, damit Sie noch erfolgreicher werden.', 
  }, 
  { 
      id: 5, 
      title: 'Multimedia.', 
      description: '3D-Visualisierung verleiht Ihrem Produkt eine neue Dimension. Fotorealistische Grafiken, gerendert für unterschiedlichste Einsatzzwecke, lassen Sie flexibel agieren. Oder auch 3D als Animation, um beispielsweise komplexe Abläufe oder Funktionen anschaulich zu erklären.', 
  }, 
  { 
      id: 6, 
      title: 'Print.', 
      description: 'Im hochwertigen Offsetdruck oder Digitaldruck, mit anschließender Verarbeitung und unter Einsatz unterschiedlichster Veredelungs-Techniken, verleihen Sie dem Endprodukt Ihren individuellen Charakter. Der Lettershop übernimmt dann den pünktlichen Versand.', 
  }, 
  ]


    const getServiceContent = services => {
        let content = [];

        for (let idx in services) {
          const item = services[idx];
          content.push(
            <div className={serviceStyles.service}>
              <div className={serviceStyles.serviceTitle}>
                    <div className={serviceStyles.serviceIcon}></div>
                    <h3 className="title" key={item.id}>{item.title}</h3>
              </div>
              <p className="text" key={item.id}>{item.description}</p>
            </div>
          );
        }
        return content;
    }
                                    
    return (
      <div className="section">
        <h1 className="section-title">Leistungen im Überblick</h1>
        {getServiceContent(services)}
      </div>
    );

    
  }



export default Services