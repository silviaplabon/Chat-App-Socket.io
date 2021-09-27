import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, TouchableOpacity, StyleSheet,Text } from 'react-native';
import { updateButtonBgColor, updateDrawerBgColor, updateTextColor,updateThemeBgColor } from '../../../Redux/Reducer/ThemeReducer';
import EStyleSheet from 'react-native-extended-stylesheet';


const SettingsThemeDetailsShow = (props) => {
	const dispatch = useDispatch();
    const themes = useSelector((state) => state.themes);
	const { color,state} = props;
    const handleUpdateColor=(color)=>{
        {
            state==1 &&   dispatch(updateTextColor(color));
        } 
        {
            state==2 &&  dispatch(updateButtonBgColor(color));
        }
        {
            state==3 && dispatch(updateThemeBgColor(color))
        }
        {
            state==4 &&  dispatch(updateDrawerBgColor(color));
        }
    }
	return (

			<TouchableOpacity style={{  alignSelf: 'center',padding:0,margin:0 }} onPress={() => handleUpdateColor(color)}>
			 <View  style={[styles.todoContainer,{backgroundColor:color,height:40}]} >
			 </View>
			</TouchableOpacity>

	);
};


const styles = EStyleSheet.create({
	todoFlex: {
		flexDirection: 'row',
		justifyContent: 'space-evenly'
	},

	todoContainer: {
		width: '7%',
		borderRadius: 10,
		marginLeft: '1.6%',
		marginTop: 3,
		padding:15,
		marginBottom: 1,
		marginRight: '1%',
	},

})

export default SettingsThemeDetailsShow;
