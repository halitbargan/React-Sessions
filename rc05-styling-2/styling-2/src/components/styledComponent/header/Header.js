import React from "react";
import styled from 'styled-components'


const Header = styled.h1 `

color:${(props) => props.primary || "yellow"};
font-size:1.5rem;
margin:1rem;


`

export default Header;