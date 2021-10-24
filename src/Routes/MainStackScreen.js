import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import HomeScreen from '../components/HomeScreen/HomeScreen';
import EStyleSheet from 'react-native-extended-stylesheet';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChatScreen from '../components/ChatScreen/ChatScreen/ChatScreen';
import ChatBoardScreen from './../components/ChatBoardScreen/ChatBoardScreen';
import Register from './../Authorization/Register';
import Login from './../Authorization/Login';
import MainTabScreen from './MainTabScreen/MainTabScreen';
import NavigationService from '../Services/NavigationService';
import { Image, View, Text } from 'react-native';
import ThemeChanger from '../SettingsTheme/ThemeChanger/ThemeChanger'
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from './DrawerContent/DrawerContent';

const Stack = createNativeStackNavigator();
const RootStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const MainStackScreen = () => {
    const themes = useSelector((state) => state.themes);
    useEffect(() => {
        EStyleSheet.build({
            $textColor: themes.textColor,
            $buttonColor: themes.buttonBgColor,
            $drawerColor: themes.drawerBgColor,
            $themeColor: themes.themeBgColor
        });
        console.log(themes.textColor, themes.buttonBgColor, themes.drawerBgColor, "app.js")
    }, [themes])

    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);
    const profile = useSelector((state) => state.receiver);
    const  typingUser= useSelector((state) => state.typingUser);

    function LogoTitle() {

        return (
            <View style={{ display: 'flex', marginTop: 10, height: 100, marginLeft: 0, flexDirection: 'row' }}>
                <Image style={{ width: 50, height: 50, borderRadius: 30, marginTop: 20, marginRight: 20, }}
                    source={{ uri: profile.image }}
                />
                <View style={{ display: 'flex', flexDirection: 'column' }}>
                    <Text style={{ marginTop: 15, fontSize: 20, fontWeight: 'bold',color:EStyleSheet.value('$textColor') }}>{profile.receiver}</Text>
                    {typingUser.typing==true && (typingUser.typingUser!==auth.displayName) ?  <Text style={{ marginTop: 5, fontSize: 14,color:'#25d366' }}>{typingUser.typingUser} is typing</Text>:
                      <Text style={{ marginTop: 5, fontSize: 14,color:'#25d366' }}>{profile.status}</Text>}
                </View>
            </View>
        );
    }

    return (
        <>
            {
                (!auth.displayName && !auth.email)
                    ?
                    <NavigationContainer ref={navigatorRef => {
                        NavigationService.setTopLevelNavigator(navigatorRef);
                    }}>
                        <RootStack.Navigator headerMode="none">
                            <RootStack.Screen name="Login" component={Login}></RootStack.Screen>
                            <RootStack.Screen name="Register" component={Register}></RootStack.Screen>
                        </RootStack.Navigator>
                    </NavigationContainer>

                    :

                    <NavigationContainer ref={navigatorRef => {
                        NavigationService.setTopLevelNavigator(navigatorRef);
                    }}>
                        <Drawer.Navigator drawerContent={props => <DrawerContent{...props} />}>
                            <Drawer.Screen name="Profile" component={MainTabScreen} />
                            <Drawer.Screen
                                name="Chat"
                                component={ChatScreen}
                                options={{
                                    headerTitle: (props) => <LogoTitle {...props} />,
                                           headerStyle: { backgroundColor: EStyleSheet.value('$drawerColor'), },
                                           headerMintColor:'#fff'
                                        }}
                            />
                            <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
                            <Drawer.Screen name="ChatScreen" component={ChatBoardScreen} />
                            <Drawer.Screen name="Home" component={HomeScreen} />
                            <Drawer.Screen name="ThemeChanger" component={ThemeChanger}  />
                            <Drawer.Screen name="MainStackScreen" component={MainStackScreen} />
                        </Drawer.Navigator>
                    </NavigationContainer>
            }
        </>
    );
};

export default MainStackScreen;