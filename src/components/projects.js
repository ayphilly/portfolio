import React, {useEffect} from "react"
import { useStaticQuery, graphql } from "gatsby"
import "./projects.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Explore from "./explore";

const Projects = () => {

    const data = useStaticQuery(graphql`
    query ProjectsQuery{
        allMarkdownRemark(
            sort: {fields: [frontmatter___date], order: ASC},
            filter : { fileAbsolutePath: {regex: "/src/projects/" }}
        ) {
          totalCount
          edges {
            node {
              id
              frontmatter {
                title
                date
                author
                link
              }
              excerpt(pruneLength: 350)
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
        <div className="projects-page" id="lt-projects" data-aos="fade-up">           
           <h2>Projects {`>`} </h2>
            <div className="projects-box">
            
                {
                    data.allMarkdownRemark.edges.slice().map( ({node}) => {
                        return <div className="project" key={node.id}>
                            <div className="project-top">
                                <h1 className="project-header"> { node.frontmatter.title} </h1>
                                <p className="project-logo"> { node.frontmatter.date} </p>
                            </div> 
                            <div className="project-text">
                                <p> {node.excerpt}</p><br/>
                                <Explore link = {node.frontmatter.link} />
                            </div>                          
                            
                        </div>
                    } )
                }
                
            </div>
           
        </div>

    );

}

export default Projects;