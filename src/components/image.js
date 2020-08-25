import React from "react";
import PropTypes from "prop-types"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

import "./image.css";
const Image = ({ src }) => {

    const dat = useStaticQuery (
        graphql` query {
            placeholderImage: file(relativePath: {eq: "images/wale2.png"}){
                childImageSharp {
                    fluid(fit: COVER, maxWidth: 600, pngQuality: 10){
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }`
    )

    return <Img fluid={src} className="profile-image"/>
    
}
Image.propTypes = {
    data: PropTypes.string
}
export default Image