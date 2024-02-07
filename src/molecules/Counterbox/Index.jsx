import styled from "styled-components";


export const Counterbox=styled.span`
    background-color: ${props => props.bgcolor};
    padding:${props => props.padding};
    color:${props => props.color};
    font-size:${props => props.color};
    font-weight:${props => props.color};
    line-height:${props => props.color};
    @media (max-width: 768px) {
        width:100%;
    }
`