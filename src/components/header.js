import { Link } from "gatsby"
import React, {useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import "./header.css"
import {barCont,clicky} from "../helper";
import logo from "../images/waleLogo1.svg";


const Header = () => {
    // const data = useStaticQuery(
    //     graphql `query {
    //         site {
    //             siteMetadata{
    //                 title
    //             }
    //         }
    //     }`
    // );
    useEffect(() => {
        barCont();
        clicky();
    });
    
    return (        
        <>
            <header >
                <img src={logo} style={{
                    width:60,
                    height:33.6,
                    marginLeft:30
                }} alt="logo"/>
                    {/* <Link
                        to="/index" 
                        style={{
                            color:`white`,
                            textDecoration:`none`
                        }}                   
                    >
                        { data.site.siteMetadata.title }

                    </Link> */}

                {/* </img> */}
                <nav>
                    <ul>
                        <li>
                            <Link
                                to="/"   
                            >
                                Home
                            </Link>
                        </li>
                        <li><a href="#lt-about">About</a></li>
                        <li><a href="#lt-services">Services</a></li>
                        <li><a href="#lt-projects">Projects</a></li>
                        <li><a href="#lt-contact">Contact</a></li>
                    </ul>
                </nav> 

                <div className="bar-svg">
                    <svg className="hamburger" viewBox="0 0 100 100" width="50pt" xmlns="http://www.w3.org/2000/svg">            
                        <line className="l-one" x1="25" y1="42" x2="75" y2="42" fill="none" stroke="#000" strokeMiterlimit="10" strokeWidth="5"/>
                        <line className="l-two" x1="25" y1="50" x2="75" y2="50" fill="none" stroke="#000" strokeMiterlimit="10" strokeWidth="5"/>
                        <line className="l-three" x1="25" y1="58" x2="75" y2="58" fill="none" stroke="#000" strokeMiterlimit="10" strokeWidth="5"/>
                    </svg>

                </div> 

            </header>
        </>
    )
}

export default Header;