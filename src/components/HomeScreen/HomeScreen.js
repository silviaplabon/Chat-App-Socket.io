import React, { useState, useEffect } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { TextInput, TouchableOpacity } from 'react-native';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { updateUsername, updateUserRoom } from '../../Redux/Reducer/UserRoomReducer';
import { useSelector, useDispatch } from 'react-redux';
import NavigationService from '../../Services/NavigationService';

const styles = EStyleSheet.create({
    addBtn: {
        width: 90,
        height: 45,
        marginTop: 10,
        borderRadius: 10,
        marginBottom: 10
    },
    touchableStyle: {
        textAlign: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 9,
        borderRadius: 20
    },
    addItemText: {
        fontSize: 20,
    },
    textInputStyle: {
        height: 50,
        padding: 10,
        fontSize: 18,
        fontWeight: '800',
        marginBottom: 5,
        marginBottom: 10,
        marginLeft: '5%',
        width: '90%'
    }
})

const HomeScreen = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const submitButtonClick = () => {
        dispatch(updateUsername({ name}))
        dispatch(updateUserRoom({room}))
        NavigationService.navigate('Chat')
    }
    const rooms = useSelector((state) => state.room);
    console.log(rooms,"rooms")

    
    return (
        <View style={{ flex: 1 }}>
            <TextInput
                style={[styles.textInputStyle, { backgroundColor: 'blue', color: 'white' }]}
                onChangeText={name => setName(name)}
                value={name}
                placeholder="Name"
                placeholderTextColor='white'
                keyboardType="default"
                tintColors='#F15927'
            />
            <TextInput
                style={[styles.textInputStyle, { backgroundColor: 'blue', color: 'white' }]}
                onChangeText={room => setRoom(room)}
                value={room}
                placeholder="Room"
                placeholderTextColor='white'
                keyboardType="default"
                tintColors='#F15927'
            />
            <TouchableOpacity onPress={() => submitButtonClick()} style={[styles.touchableStyle, { backgroundColor: 'blue' }]}>
                <Icon name="plus"
                    color='red'
                    size={25}
                />
                <Text style={[styles.addItemText, { color: 'red' }]}>Add Item</Text>
            </TouchableOpacity>
        </View>
    );
};

export default HomeScreen;