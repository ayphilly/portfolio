import React , {useEffect} from "react";
import PropTypes from "prop-types"

import Helmet from "react-helmet";
import Header from "./header";
import "./layout.css";
import AOS from "aos";
import "aos/dist/aos.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/free-brands-svg-icons';
import { faTwitterSquare, faFacebookSquare, faInstagramSquare, faGithubSquare, faLinkedin, faBehanceSquare} from '@fortawesome/free-brands-svg-icons'
// import the library
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(  
    faTwitterSquare,
    faFacebookSquare,
    faInstagramSquare,
    faGithubSquare,
    faLinkedin,
    faBehanceSquare    
);

const Layout = ({ children }) => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    });

    return (
        <div className="body">
            <Helmet        
                    title="WaleOfBlanco"
                    meta ={[
                    {name : "description", content:"sample"},
                    { name: 'keywords', content: 'sample, something' }
                ]}
            />
            <Header/>

            {/* <div style={{
                margin: `0 auto`,
                maxWidth: `100%`,
                padding: `0 1.0875rem 1.45rem`
            }}> */}

                <main>{ children }</main>
                <footer>
                    <p>Na me run am with <span className="love" >  &#128150;</span></p>
                    <p>
                        © {new Date().getFullYear()}, Built with
                        {` `}
                        <a href="https://www.gatsbyjs.org">Gatsby</a>
                    </p>

                    <div className="sc-icons">
                        <a href="https://twitter.com/waleofblanco" target="_blank" ><FontAwesomeIcon icon={['fab', 'twitter-square']} size="2x" className="icon-me" /></a>
                        <a href="https://www.instagram.com/waleofblanco/" target="_blank" ><FontAwesomeIcon icon={['fab', 'instagram-square']} size="2x"  className="icon-me"/></a>                    
                        <a href="https://github.com/ayphilly" target="_blank"><FontAwesomeIcon icon={['fab', 'github-square']} size="2x"  className="icon-me"/></a>
                        <a href="https://www.behance.net/adewaleayomipo" target="_blank"><FontAwesomeIcon icon={['fab', 'behance-square']} size="2x"  className="icon-me"/></a>
                        <a href="https://www.linkedin.com/in/adewale-philemon-a02416110/" target="_blank"><FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" className="icon-me"/></a>
                    </div>

                   
                    
                </footer>
            {/* </div> */}
        </div>
        

    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
  }
  
  export default Layout