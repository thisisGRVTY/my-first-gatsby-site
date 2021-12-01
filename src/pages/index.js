import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Services from "../components/services.js"
import TextImage from "../components/textimage.js"
import Werte from "../components/werte.js"
import Eckdaten from "../components/eckdaten.js"
import Nachhaltig from "../components/nachhaltig.js"
import AboutUs from "../components/about-us.js"
import ContactUs from "../components/contact-us.js"
import Portfolio from "../components/portfolio.js"



const Index = () => {

  const heroContent = [
    { 
        id: 1, 
        title: 'We will help to create digital solutions for today’s profit-driven market.', 
        subtitle: 'Visit the Webs Official 3.0 Version on our Site', 
    },
  ]



  return(
    <Layout>
        <Hero heroContent={heroContent}/>
        <Services />
        <TextImage />
        <Werte />
        <Eckdaten />
        <Nachhaltig />
        <AboutUs />
        <ContactUs />
        <Portfolio />
    </Layout>
  )
}



export default Index
