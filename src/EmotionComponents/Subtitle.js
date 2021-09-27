import React from "react"
import styled, { css } from "@emotion/native"

const Subtitle = props => (
    <SubtitleText>{props.text}</SubtitleText>
)
export default Subtitle;

const SubtitleText = styled.Text`
	font-size:20px;
	color: ${props => props.textColor};
	text-align: center;
    margin-bottom:14px;
    
`