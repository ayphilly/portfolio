import React, {useEffect} from "react"
import Layout from "../components/layout"
import {typing} from "../helper";
import Particles from 'react-particles-js';
import Link from "gatsby";
import "./404.css";

const NotFoundPage = () => {

  useEffect (()=> {

    typing();

  },[])
 
  return <Layout>

    <div className="error">
      <h1 className="element">  </h1>
      
      {/* <Link
          to="/" 
          style={{
              color:`white`,
              textDecoration:`none`
          }}                   
      >
          Home

      </Link> */}
      
      <Particles 
        className="particles"
        params={{ 
            particles: { 
                number: { 
                  value: 200, 
                  density: { 
                      enable: true, 
                      value_area: 3000, 
                  } 
                }, 
                line_linked: {
                  enable: false,
                  distance: 160.3412060865523,
                  color: "#000000",
                  opacity: 1,
                  width: 0.8017060304327615
                },
                shape: {
                  type: "circle",
                  stroke: {
                    width: 0,
                    color: "#000"
                  },
                  polygon: {
                    nb_sides: 5
                  },
                  image: {
                    src: "img/github.svg",
                    width: 100,
                    height: 100
                  }
                },
            }, 
            interactivity:{
                detect_on:"canvas",
                events:{
                    onhover:{
                        enable:true,
                        mode:"repulse"
                    },
                    onclick:{
                        enable:true,
                        mode:"push"
                    },
                    resize:true
                },
                
            },
            
        }} 
      />
    </div>    
    
    
  </Layout>
}

export default NotFoundPage
