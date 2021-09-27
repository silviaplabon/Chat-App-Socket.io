import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from '../../components/HomeScreen/HomeScreen';
import ChatBoardScreen from '../../components/ChatBoardScreen/ChatBoardScreen';
import Login from '../../Authorization/Login';
import { useDispatch, useSelector } from 'react-redux';
import NavigationService from '../../Services/NavigationService';
import { auth } from '../../../firebase';

const Tab = createMaterialBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const DetailsStack = createNativeStackNavigator();

const MainTabScreen = () => {
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);
    const signOutUser = () => {
        console.log('sign out user')
        auth.signOut().then(() => {
            dispatch(updateEmail(''));
            dispatch(updateName(''));
            NavigationService.navigate('Login')
        })
    }

    return (
        <Tab.Navigator
            initialRouteName="Home"
            activeColor="#fff"
            barStyle={{ backgroundColor: '#212729' }}
        >

            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Home',
                    tapBarColor: '#212529',
                    tabBarIcon: ({ color }) => (
                        <Icon name="ios-home" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="ChatBoardScreen"
                component={ChatBoardScreen}
                options={{
                    tabBarLabel: 'Notifications',
                    tapBarColor: '#fff',
                    tabBarIcon: ({ color }) => (
                        <Icon name="ios-notifications" color={color} size={26} />
                    ),
                }}
            />
            {
                (!auth.username || !auth.email) ? <Tab.Screen
                    name="Login"
                    component={Login}
                    options={{
                        tabBarLabel: 'Log In',
                        tapBarColor: '#212729',
                        tabBarIcon: ({ color }) => (
                            <Icon name="ios-person" color={color} size={26} />
                        ),
                    }}
                />
                    :
                    <>
                    <Tab.Screen
                    name="LogOut"
                    component={HomeScreen}
                    options={{
                        tabBarLabel: 'Logout',
                        tapBarColor: '#212729',
                        tabBarIcon: ({ color }) => (
                            <Icon name="ios-person" color={color} size={26} />
                        ),
                    }}
                    onPress={()=>signOutUser()}
                />
                     
                    </>
            }

            {/* <Tab.Screen
                name="Explore"
                component={ExploreScreen}
                options={{
                    tabBarLabel: 'Explore',
                    tapBarColor: 'red',
                    tabBarIcon: ({ color }) => (
                        <Icon name="ios-aperture" color={color} size={26} />
                    ),
                }}
            /> */}
        </Tab.Navigator>
    )
};

export default MainTabScreen;
