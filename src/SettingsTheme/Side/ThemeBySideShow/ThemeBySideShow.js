import React from 'react';
import { Image, View, Text, Button, TouchableOpacity,StyleSheet } from 'react-native';
// import EStyleSheet from 'react-native-extended-stylesheet';
import Card from '../../../EmotionComponents/Card'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useDispatch } from 'react-redux';
import { updateTextColor, updateButtonBgColor, updateThemeBgColor, updateDrawerBgColor } from '../../../Redux/Reducer/ThemeReducer';



const ThemeBySideShow = (props) => {
    const dispatch = useDispatch();
    const { name, imgsrc, textName, textColor, buttonName, buttonColor, drawerColor, drawerName, themeColor, themeName } = props.color;
    const handleUpdateColor = (textColor, buttonColor, themeColor, drawerColor) => {
        dispatch(updateTextColor(textColor));
        dispatch(updateButtonBgColor(buttonColor));
        dispatch(updateThemeBgColor(themeColor))
        dispatch(updateDrawerBgColor(drawerColor));
        // EStyleSheet.build({
        //     $textColor: textColor,
        //     $buttonColor:buttonColor,
        //     $drawerColor:drawerColor,
        //     $themeColor:themeColor
        // });
    }

    return (
        <View style={styles.card}>
            <Image style={{ width: '100%', height: 120, borderTopLeftRadius: 13, borderTopRightRadius: 13 }}
                source={{ uri: imgsrc }}
            />
            <View style={styles.cardBody}>
                <Text style={styles.name}>{name}</Text>

                <TouchableOpacity onPress={() => handleUpdateColor(textColor, buttonColor, themeColor, drawerColor)} style={styles.touchableStyle}>
                    <Text style={{ color: 'white' }}>Apply</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    name: {
        padding: 9,
    },
    touchableStyle: {
        textAlign: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#212729',
        padding: 9,
        marginTop: 2,
        marginBottom: 8,
        borderRadius: 15,
    },

    card: {
        width: '90%',
        height: 170,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.20,
        elevation: 8,
        backgroundColor: 'white',
        borderRadius: 10,
        marginLeft: '5%',
        marginTop: 10,
        marginBottom: 10,
        marginRight: '5%',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    cardBody: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 5,
        paddingRight: 5
    }

})
export default ThemeBySideShow;
