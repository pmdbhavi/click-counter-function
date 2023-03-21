import styled from 'styled-components'

export const Container=styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    min-height:100vh;
    background-color:#f1f5f8;
    background-size:cover;
`

export const Heading=styled.h1`
    color:black;
    font-size:40px;
    font-family:"Roboto";
    font-weight:bold;
`

export const Span=styled.span`
    color:#c20a72;
`

export const Para=styled.p`
    color:black;
    font-family:"Roboto";
    font-size:30px;
`

export const Button=styled.button`
    background-color:#007bff;
    color:white;
    padding:10px;
    border-width:0px;
    border-radius:5px;
    cursor:pointer;
`