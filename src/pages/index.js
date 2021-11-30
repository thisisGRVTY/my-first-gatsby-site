import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Services from "../components/services.js"



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
    </Layout>
  )
}



export default Index
