import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Services from "../components/services"


const Index = () => {
  return(
    <Layout>
        <Hero />
        <Services />
        {/* <div>
          <h1>Home</h1>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam</p>
        </div> */}
    </Layout>
  )
}

export default Index
