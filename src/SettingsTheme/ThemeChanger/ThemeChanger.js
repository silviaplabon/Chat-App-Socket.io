import React from 'react';
import { Button, Text } from 'react-native';
import ThemeByDetails from '../Details/ThemeByDetails/ThemeByDetails';
import ThemeBySide from '../Side/ThemeBySide/ThemeBySide';
import { useState } from 'react'
import Container from '../../EmotionComponents/Container';

const ThemeChanger = () => {

    const [themeOption, setThemeOption] = useState(true);

    return (
        <Container>
            {/* {
                themeOption == true ?  */}
                <ThemeBySide></ThemeBySide>
                {/* :<ThemeByDetails></ThemeByDetails>
            }
            {
                themeOption==true ? <Button title='DO you want to change by details? ' onPress={() => setThemeOption(false)}></Button>: 
                <Button title='DO you want to change by Side? ' onPress={() => setThemeOption(true)}></Button>
            } */}
        </Container>
    );
};

export default ThemeChanger;