import React from "react"
import styled, { css } from "@emotion/native"

const DescriptionTag = props => (
    props.text ?   <Description>{props.text}</Description>:  <Description>Value</Description>
)

export default DescriptionTag;


const Description = styled.Text`
    font-size:15px;
	font-weight: 500;
	color: ${props => props.textColor};
	text-align: center;
`