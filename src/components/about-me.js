import React, {useEffect} from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "./image"
import AOS from "aos";
import "aos/dist/aos.css";
import "./about-me.css";


const AboutPage = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    });
  const dat = useStaticQuery (
        graphql` query {
            placeholderImage: file(relativePath: {eq: "images/wale1.png"}){
                childImageSharp {
                    fluid(fit: COVER, maxWidth: 400, pngQuality: 10){
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }`
    )
  return (
    
        <div className="about" id ="lt-about" data-aos="fade-up">
            <Image className="profile-pic" src={dat.placeholderImage.childImageSharp.fluid} />  
            <div className="about-word">
                <h1>About me {`>`} </h1>
                <p >Hi there, <span className="hand" role="img" >  &#128075;&#127998;</span></p>      
                <p>
                    I work with brands to make them better and 
                    scale upmake them better and make them and 
                    I work with brands to make them better and 
                    scale upmake them better and make them bet 
                    I work with brands to make them better and 
                    scale upmake them better and make them and.                    
                </p>
                
            </div>
        
            
        </div>
    )
    
  
}

export default AboutPage

