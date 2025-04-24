import * as React from "react"
import * as mainStyle from '../scss/style.module.scss'
import Layout from "../components/layout"
import Introduce from './introduce'
import About from './about'
import Skills from './skills'
import Quality from './quality'
import Service from './service'
import Portfolio from './portfolio'
import Contact from './contact'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <div id="introduce" className={mainStyle.introdueLayerBg}>
        <Introduce />
      </div>
      <div id="about" className={mainStyle.aboutLayerBg}>
        <About />
      </div>
      <div id="skills" className={mainStyle.skillLayerBg}>
        <Skills />
      </div>
      <div id="quality" className={mainStyle.qualityLayerBg}>
        <Quality />
      </div>
      <div id="service" className={mainStyle.serviceLayerBg}>
        <Service />
      </div>
      <div id="portfolio" className={mainStyle.portfolioLayerBg}>
        <Portfolio />
      </div>
      <div id="contact" className={mainStyle.contactLayerBg}>
        <Contact />
      </div>
    </Layout>
  )
}

export default IndexPage
