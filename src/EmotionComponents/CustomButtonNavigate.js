import React from "react"
import styled, { css } from "@emotion/native"
import NavigationService from "../Services/NavigationService";

const CustomButtonNavigate = props => (
    <ButtonContainer
        onPress={() => NavigationService.navigate(`${props.task}`)}
        style={css`
        border-width: 1px;
    `}
        backgroundColor={props.backgroundColor}
    >
        <ButtonText textColor={props.textColor}>{props.title}</ButtonText>
    </ButtonContainer>
)

export default CustomButtonNavigate;

const ButtonContainer = styled.TouchableOpacity`
    margin:10px;
    width: 100px;
    height: 48px;
    padding: 10px 8px;
    border-radius: 8px;    
    background-color: ${props => props.backgroundColor};
`

const ButtonText = styled.Text`
	font-size: 15px;
	color: ${props => props.textColor};
	text-align: center;
    font-weight:600;
`