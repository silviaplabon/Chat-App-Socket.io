import React from "react"
import styled, { css } from "@emotion/native"

const InputText = props => (
   <TextInput>{props.text}</TextInput>
)
export default Title;

const TitleText = styled.Text`
    font-size:35px;
	color: ${props => props.textColor};
	text-align: center;
    font-weight:600
`