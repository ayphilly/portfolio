import React from "react";
import styled from 'styled-components'


const  Explore = props => {

    return <exploreLink href={props.link} target="_blank"> Explore </exploreLink>
}

const exploreLink = styled.a`
    color: red;
    background-color: purple;
    font-size: 15px;
    font-weight:bold;
    transition: all 0.5s ease-in;
    width: 30%
    height:40px;
    font-family:Poppins;

    &:hover {
        color: #000;
        background-color: #fff;
        border: 2px solid black;
        font-size: 15px;
        font-weight:bold;
    }

`
export default Explore