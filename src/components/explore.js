import React from "react";
import styled from 'styled-components'


const  Explore = props => {
    const text = "Explore>";
    return <ExploreLink href={props.link} target="_blank"> {text} </ExploreLink>
}

const ExploreLink = styled.a`
    color: #000;
    background-color: #fff;
    font-size: 15px;
    font-weight:bold;
    transition: all 0.5s ease-in;
    width: 80px;    
    font-family:Poppins;
    text-decoration: none;
    text-align:center;
    padding:5px;    

    &:hover {
        color: #000;
        background-color: #fff;
        border: 2px solid black;
        font-size: 15px;
        font-weight:bold;
    }

`
export default Explore