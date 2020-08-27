import React, {useEffect} from "react"
import { useStaticQuery, graphql } from "gatsby"
import "./projects.css";
import AOS from "aos";
import "aos/dist/aos.css";

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
                            <p className="project-text"> {node.excerpt}</p><br/>
                        </div>
                    } )
                }
                
            </div>
           
        </div>

    );

}

export default Projects;