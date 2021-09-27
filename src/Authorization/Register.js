import React, { useContext, useEffect, useState } from 'react'
import { KeyboardAvoidingView, ImageBackground } from 'react-native'
import { StyleSheet, View } from 'react-native'
import { Button, Input, Text, TextInput } from 'react-native'
import { auth } from '../../firebase'
import NavigationService from '../Services/NavigationService'

const Register = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [imageURL, setImageURL] = useState("")

    const image = "https://i.pinimg.com/originals/4a/94/26/4a94268541d7a0ed95a8be5138e8a288.jpg"
    const register = () => {
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((authUser) => {
                authUser.user.updateProfile({
                    displayName: name,
                    photoURL: imageURL || "https://www.nicepng.com/png/detail/933-9332131_profile-picture-default-png.png"
                })
            })
            .catch((error) => alert(error.message))
    }
    console.log(name,"name")


    
    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>

            <Text h3 style={{ marginBottom: 50, textAlign: 'center', fontFamily: "Philosopher-Bold" }}>
                Create an account
            </Text>

            <View style={styles.inputContainer}>

                <TextInput
                    style={[styles.textInputStyle, { backgroundColor: 'black', color: 'white' }]}
                    type="text"
                    onChangeText={(name) => setName(name)}
                    value={name}
                    placeholder="Full Name"
                    placeholderTextColor='white'
                    keyboardType="default"
                    tintColors='#F15927'
                />

                <TextInput
                    style={[styles.textInputStyle, { backgroundColor: 'black', color: 'white' }]}
                    onChangeText={(email) => setEmail(email)}
                    type="email"
                    value={email}
                    placeholder="Email"
                    placeholderTextColor='white'
                    keyboardType="default"
                    tintColors='#F15927'
                />



                <TextInput
                    style={[styles.textInputStyle, { backgroundColor: 'black', color: 'white' }]}
                    onChangeText={(pass) => setPassword(pass)}
                    type="password"
                    secureTextEntry
                    value={password}
                    placeholder="Password"
                    placeholderTextColor='white'
                    keyboardType="default"
                    tintColors='#F15927'
                />

            </View>
            {/* <Button containerStyle={styles.button} raised onPress={register} title="Register"></Button>
            <Button raised style={styles.registerBtn} title="Login" /> */}

            <Button onPress={register} type="outline" titleStyle={{ color: 'white' }} containerStyle={styles.authBtn} title="SignUp" />
            <View style={{ height: 5 }}></View>
            <View style={styles.loginSection}>
                <Text > Have an account ? </Text>
                <Button title="Login" titleStyle={{ color: 'black' }} type="outline" onPress={() => NavigationService.navigate('Login')} />
            </View>
        </KeyboardAvoidingView>
    )
}

export default Register;

const styles = StyleSheet.create({
    loginSection: {
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
        color: 'white',
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
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: 'white'

    },
    inputContainer: {
        width: '70%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    registerBackground: {
        width: '100%',
        paddingTop: 15,
        paddingBottom: 15,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
    button: {
        width: '65%',
        marginTop: 10,
        backgroundColor: '#ef3c48'
    }
})
