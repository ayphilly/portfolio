import React, {useEffect} from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Contact from "../components/contact"
import Services from "../components/services"
import Projects from "../components/projects"
import Image from "../components/image"
// import SEO from "../components/seo"
import "./index.css";
import AboutPage from "../components/about-me";
import AOS from "aos";
import "aos/dist/aos.css";
import {barCont} from "../helper";

const IndexPage = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
    barCont();
    // closeLink();
  });

  const dat = useStaticQuery (
        graphql` query {
            placeholderImage: file(relativePath: {eq: "images/wale2.png"}){
                childImageSharp {
                    fluid(fit: COVER, maxWidth: 500, pngQuality: 10){
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }`
    )
    
  return <Layout>
    {/* <SEO title="Home" /> */}
    {/* style={{ maxWidth: `300px`, marginBottom: `1.45rem` , display: `flex`}} */}
    <div className="overlay">
      <h1><a href="/">Home</a></h1> 
      <h1><a href="#lt-about" className="linking">About</a></h1> 
      <h1><a href="#lt-services" className="linking">Services</a></h1> 
      <h1><a href="#lt-projects" className="linking">Projects</a></h1> 
      <h1><a href="#lt-contact" className="linking">Contact</a></h1> 

    </div>
    <div className="myname" data-aos="fade-up">
      <div className="word">
        <p >Hi there, <span className="hand" role="img" >  &#128075;&#127998;</span></p>      
        <p>I work with brands to </p>
        <p>make them better and </p>
        
        <p className="under">scale up</p>
      </div>
      
      <Image className="profile-pic" src={dat.placeholderImage.childImageSharp.fluid} />  

      
    </div>
    <AboutPage />
    <Services />
    <Projects />
    <Contact/>
    {/* <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
  </Layout>
}

export default IndexPage

