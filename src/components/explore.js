import React from "react";
import styled from 'styled-components'


const  Explore = props => {

    return <exploreLink href={props.link} target="_blank"> Explore </exploreLink>
}

const exploreLink = styled.a`
    color: white;
    background-color: black;
    font-size: 14px;
    font-weight:bold;
    transition: all 0.5s ease-in;
    width: 30%
    height:40px;

    &:hover {
        color: black;
        background-color: white;
        border: 2px solid black;
        font-size: 14px;
        font-weight:bold;

    }

`
export default Explore