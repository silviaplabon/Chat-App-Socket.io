import React from 'react';
import SettingsThemeDetails from '../SettingsThemeDetails/SettingsThemeDetails';


const ThemeByDetails = () => {

    const colors = [
        {
            id: 1,
            name: 'Living Coral',
            color: '#FC766AFF'
        },
        {
            id: 2,
            name: 'Turquoise ',
            color: '#42EADDFF'
        },
        {
            id: 3,
            name: 'Blue',
            color: '#00A4CCFF'
        },
        {
            id: 4,
            name: 'Orange',
            color: '#F95700FF'
        },
        {
            id: 5,
            name: 'Sailor Blue',
            color: '#00203FFF'
        },
        {
            id: 6,
            name: 'Blazing Yellor',
            color: '#FEE715FF'
        },
        {
            id: 7,
            name: 'Space Cherry',
            color: '#990011ff'
        },
        {
            id: 8,
            name: 'Dark Green',
            color: '#006b38ff'
        },
        {
            id: 9,
            name: 'Deep Blue',
            color: '#2460A7FF'
        },
        {
            id: 10,
            name: 'Blue',
            color: '#011936FF'
        },

    ]


    return (
        <>
            <SettingsThemeDetails state={1} colors={colors} type="Text Color"></SettingsThemeDetails>
            <SettingsThemeDetails state={2} colors={colors} type="Button Color"></SettingsThemeDetails>
            <SettingsThemeDetails state={3} colors={colors} type="Theme Color"></SettingsThemeDetails>
            <SettingsThemeDetails state={4} colors={colors} type="Drawer Color"></SettingsThemeDetails>
        </>
    );
};

export default ThemeByDetails;