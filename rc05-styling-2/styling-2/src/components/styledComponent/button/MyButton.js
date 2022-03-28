import styled from "styled-components";

const Button = styled.button `

    background-color:${(props)=>(props.renk ? "purple":"blue")};
    border:none;
    margin: 2px;
    color:#fff;
    padding: 12px 15px;
    text-decoration:none
    display:inline-block;
    cursor:pointer;
    font-size:18px;

`;

export default Button;