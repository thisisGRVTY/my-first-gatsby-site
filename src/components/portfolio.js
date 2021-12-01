import React from "react"
import * as portfolioStyles from "./portfolio.module.scss"


const Portfolio = () => {
    const PortfolioTitle = [
        { 
            id: 1, 
            title: 'Unsere Kunden',
            subtitle: 'Auszug aus der Referenzliste',
            text: 'Verschaffen Sie sich einen Einblick',
        }, 
    ]

    const Portfolio = [
        { 
            id: 1, 
            title: 'Sparkasse',
        }, 
        { 
            id: 2, 
            title: 'Centramed',
        }, 
    ]

    const getPortfolioTitle = PortfolioTitle => {
        let content = [];
        
        for (let idx in PortfolioTitle) {
            const item = PortfolioTitle[idx];
            content.push(
            <div>
                <h1 className="sectionTitle" key={item.id}>{item.title}</h1> 
                <h3 className="title" key={item.id}>{item.subtitle}</h3> 
                <p className="text" key={item.id}>{item.text}</p> 
            </div>
                
            );
        }
        return content;
    }

    const getPortfolio = Portfolio => {
        let content = [];
        
        for (let idx in Portfolio) {
            const item = Portfolio[idx];
            content.push(
                <div className={portfolioStyles.portfolioImage}>
                    <h1 className="sectionTitle" key={item.id}>{item.title}</h1> 
                </div>
                
            );
        }
        return content;
    }





    return(
        <section className={portfolioStyles.contact}>
                {getPortfolioTitle(PortfolioTitle)}
                {getPortfolio(Portfolio)}
        </section>
    )
}

export default Portfolio