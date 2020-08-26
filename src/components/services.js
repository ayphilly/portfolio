import React, {useEffect} from "react"
import { useStaticQuery, graphql } from "gatsby"
import "./services.css";
import right from "../images/right.svg";
import left from "../images/left.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {

    const data = useStaticQuery(graphql`
    query HomePageQuery{
        allMarkdownRemark(
            sort: {fields: [frontmatter___date], order: DESC},
            filter : { fileAbsolutePath: {regex: "/services/" }}
        ) {
          totalCount
          edges {
            node {
              frontmatter {
                title
                date
                author
              }
              excerpt
              timeToRead
            }
          }
        }
      }
    `)

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    });

    return (
        <div className="services-page" id="lt-services" data-aos="fade-up">
            <h2>Services {`>`} </h2>
           <img className="img-1" src={right} alt="right" />
            <div className="services-box">
            
                {
                    data.allMarkdownRemark.edges.slice(0,2).map( ({node}) => {
                        return <div className="services-right" key={node.id}>
                            <h1 className="service-header"> { node.frontmatter.title} </h1>
                            <p className="service-text"> {node.excerpt}</p>
                        </div>
                    } )
                }
                {
                    data.allMarkdownRemark.edges.slice(2,4).map( ({node}) => {
                        return <div className="services-left" key={node.id}>
                            <h1 className="service-header"> { node.frontmatter.title} </h1>
                            <p className="service-text"> {node.excerpt}</p>
                        </div>
                    } )
                }
            </div>

            <img className="img-2" src={left} alt="left"/>
            

            
        </div>

    );

}

export default Services;