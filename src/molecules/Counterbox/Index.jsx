import styled from "styled-components";


export const Counterbox=styled.span`
    background-color: ${props => props.bgcolor};
    padding:${props => props.padding};
    color:${props => props.color};
    font-size:${props => props.size};
    font-weight:${props => props.fontweight};
    line-height:${props => props.height};
    @media (max-width: 768px) {
        width:100%;
    }
`