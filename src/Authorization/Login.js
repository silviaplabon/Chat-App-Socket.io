import React, { useEffect, useState } from 'react'
import { Button, Image } from 'react-native'
import { KeyboardAvoidingView, StyleSheet, View, Text, TextInput } from 'react-native'
import Register from './Register'
import { useDispatch } from 'react-redux';
import NavigationService from '../Services/NavigationService';
import { auth } from '../../firebase';
import { updateEmail, updateName } from '../Redux/Reducer/authReducer';

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const profileLogo = "https://i.ibb.co/bdj8BSX/images-removebg-preview.png"
    const image = "https://i.pinimg.com/originals/4a/94/26/4a94268541d7a0ed95a8be5138e8a288.jpg"
    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                console.log(authUser,"authuser display name")
                dispatch(updateEmail(authUser.email));
                dispatch(updateName(authUser.displayName));
                NavigationService.navigate('ChatBoardScreen')
            }
        })
        return unsubscribe
    }, [])

    const signIn = () => {
        auth.signInWithEmailAndPassword(email, password)
            .then()
            .catch((error) => alert(error))
    }

    return (
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.inputContainer}>

                <TextInput
                    style={[styles.textInputStyle,{ backgroundColor: 'black', color: 'white' }]}
                    onChangeText={name => setEmail(name)}
                    autoFocus type="email"
                    value={email}
                    placeholder="Email"
                    placeholderTextColor='white'
                    keyboardType="default"
                    tintColors='#F15927'
                />

                <TextInput
                     style={[styles.textInputStyle,{ backgroundColor: 'black', color: 'white' }]}
                    onChangeText={pass => setPassword(pass)}
                    value={password}
                    placeholder="Password"
                    placeholderTextColor='white'
                    keyboardType="default"
                    tintColors='#F15927'
                />
            </View>
            <Button title="Login" titleStyle={{ color: 'white' }} type="outline" containerStyle={styles.authBtn} onPress={() => signIn()} />
            <View style={{ height: 5 }}></View>
            <View style={styles.registerSection}>
                <Text > Don't have an account? </Text>
                <Button onPress={() =>NavigationService.navigate('Register')} type="clear" titleStyle={{ color: 'black' }} title="SignUp" />
            </View>
        </KeyboardAvoidingView>
    )
}
const styles = StyleSheet.create({
    registerSection: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    authBtn: {
        width: 100,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: '#212729',
        borderRadius: 10,
        color: 'white'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: 'white'
    },
    textInputStyle: {
        height: 50,
        padding: 10,
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 5,
        marginBottom: 10,
        width: '100%',
        borderRadius:20
    },
    inputContainer: {
        width: '70%',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white'
    },
    loginBackground: {
        color: 'black',
        width: '100%',
        paddingTop: 15,
        paddingBottom: 15,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    }
})


export default Login;

