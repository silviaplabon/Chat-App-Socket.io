import React from "react"
import styled, { css } from "@emotion/native"

const Container = props => {
    return(
        <ContainerArea  colorName={props.colorName} >{props.children}</ContainerArea>

    ) 
}
export default Container;

const ContainerArea = styled.View`
background: ${props => props.colorName};
height: 100%;
width: 100%;
display:flex;
flex:1;

`