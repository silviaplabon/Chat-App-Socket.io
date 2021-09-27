import React, { useEffect, useState } from 'react';
import { View, Text, ImageBackground, TextInput, StyleSheet, FlatList, Button, TouchableOpacity, ScrollView, onKeyPress } from 'react-native';
import ChatShow from './../ChatShow/ChatShow';
import { useSelector, useDispatch } from 'react-redux';
import io from "socket.io-client";
import EStyleSheet from 'react-native-extended-stylesheet';
import { addMessage, toggleMessageDelivered, toggleMessageSeen } from '../../../Redux/Reducer/MessageReducer';
import { updateRoomReceiverStatus } from '../../../Redux/Reducer/ReceiverProfileReducer';
import Icon from 'react-native-vector-icons/Ionicons';
import { updateUserTyping } from '../../../Redux/Reducer/UserTypingReducer';
let socket, timeout, socketUser;
const ENDPOINT = "http://192.168.0.110:4000";


const ChatScreen = () => {
    const dispatch = useDispatch();
    const roomInfo = useSelector((state) => state.room);
    const auth = useSelector((state) => state.auth);
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('');
    // const [messages, setMessages] = useState([]);
    const [typing, setTyping] = useState(false);
    const [typingPerson, setTypingPerson] = useState('')
    const [socketUserId, setSocketUserId] = useState('')
    const messages = useSelector((state) => state.messages);
    console.log(messages, "message fromn redux")


    //1. creating a  new room by user name and room id and emitting a events for doing this
    useEffect(() => {
        socket = io(ENDPOINT);
        const name = roomInfo.username;
        const room = roomInfo.userroom;
        socket.emit('join', { name, room }, (error) => {
            if (error) {
                alert(error);
            }
        });
    }, [ENDPOINT && roomInfo.username && roomInfo.userroom])

    //2. Getting users socket id from users collection
    useEffect(() => {
        if (users) {
            const data = users.find(user => user.name == roomInfo.username);
            setSocketUserId(data.id);
            const userData = { name: auth.displayName, state: 'online' }
            socket.emit('online', userData)
        }
    }, [users])

    //3. Handling received message options
    useEffect(() => {
        socket.on('message', (message) => {
            const options = { id: message.id, user: message.user, text: message.text, delivered: false, sendTime: message.sendTime }
            dispatch(addMessage({ id: message.id, user: message.user, text: message.text, delivered: false, sendTime: message.sendTime }))
            if (message.user !== auth.displayName) {
                socket.emit('received', options);
                socket.emit('markSeen', options);
            }
        });
    }, [])



    useEffect(() => {
        socket.on('markedSeen', function (message) {
            const index = messages?.findIndex(x => x.id == message.id);
            console.log(index, messages, "from data delivered ")
            if (index != -1) {
                dispatch(toggleMessageSeen({ id: messages[index].id, seen: true }))
            }
        });
    }, [message || messages])


    //4. Handling roomData, online,offline,typing
    useEffect(() => {
        socket.on("roomData", ({ users }) => {
            setUsers(users);
        });
        socket.on("online", (data) => {
            if (data) {
                dispatch(updateRoomReceiverStatus('online'))
            }
        });
        socket.on("offline", (data) => {
            if (data) {
                dispatch(updateRoomReceiverStatus('offline'))
            }
        });
        socket.on('typing', function (data) {
            if (data.state) {
                setTyping(true)
                setTypingPerson(data.name)
                dispatch(updateUserTyping({ typingUser: data.name, typing: true }))
            }
            else {
                setTyping(false)
                dispatch(updateUserTyping({ typingUser: data.name, typing: false }))
            }
        });
    }, []);

    // setting delivered value as true
    useEffect(() => {
        socket.on('delivered', function (message) {
            const index = messages?.findIndex(x => x.id == message.id);
            console.log(index, messages, "from data delivered ")
            if (index != -1) {
                console.log(messages[index].user, auth.displayName, "name of user and display name")
                // messages[index].delivered = true;
                dispatch(toggleMessageDelivered({ id: messages[index]?.id, delivered: true }))
                console.log(messages[index].delivered)
            }
        });
    }, [message || messages])


    // When a user click enter button then it will send message  to server site.
    const submitChatMessage = (msg, socketId) => {
        let timeData, hours, minute, time;
        timeData = new Date()
        hours = timeData.getHours()
        minute = timeData.getMinutes();
        if (hours % 12) {
            const newHour = hours - 12;
            if (minute < 10) { time = newHour + '.0' + minute + ' PM' }
            else { time = newHour + '.' + minute + ' PM' }
        }
        else {
            if (minute < 10) { time = hours + '.0' + minute + ' AM' }
            else { time = hours + '.' + minute + ' AM' }
        }
        const data = {
            message: msg,
            userId: socketId,
            id: new Date().getTime(),
            sendTime: time
        }
        data && socket.emit('sendMessage', data, () => setMessage(''));

    }

    // Handling typing operation: when a user is typing then emit typing events and showing another person(after 3000ms by timeout emit will be triggered)
    const timeoutFunction = (name) => {
        const data = { name: name, state: false };
        socket.emit("typing", data);
    }
    const userIsTyping = (key, name) => {
        const data = { name: name, state: true };
        socket.emit('typing', data);
        clearTimeout(timeout)
        timeout = setTimeout(function () {
            timeoutFunction(name)
        }, 2000)
    }
    const backgroundImage = { uri: 'https://cdn.wallpapersafari.com/27/32/jt4AoG.jpg' };



    return (

        <View style={[styles.container, { flex: 1, flexDirection: 'column' }]}>
            <ImageBackground
                style={{ flex: 1, justifyContent: "center", elevation: 1, }}
                source={backgroundImage}>

                <View style={{ flex: 0.9 }}>
                    <ScrollView>
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={{
                                marginTop: 5,
                                paddingBottom: 50,
                            }}
                            keyExtractor={(item, index) => index}
                            data={messages}
                            renderItem={itemData =>
                                <ChatShow item={itemData.item} name={roomInfo.username} index={itemData.index} ></ChatShow>
                            }
                        >
                        </FlatList>
                    </ScrollView>
                </View>
                <View
                    style={{
                        flex: 0.05, flexDirection: 'row', marginLeft: 10, marginRight: 10,
                        postion: 'absolute', left: 0, right: 0, bottom: -15
                    }}>

                </View>

                <View style={{
                    flex: 0.1, flexDirection: 'row', marginLeft: '8%',
                    postion: 'absolute', left: 0, right: 0, bottom: 0
                }}>
                    <TextInput
                        style={{ height: 40, borderWidth: 2, borderRadius: 20, flex: 0.90, marginLeft: 2 }}
                        autoCorrect={false}
                        value={message}
                        onSubmitEditing={() => submitChatMessage(message, socketUserId)}
                        onChangeText={message => {
                            setMessage(message);
                        }}
                        onKeyPress={({ nativeEvent }) => userIsTyping(nativeEvent.key, auth.displayName)}
                    />
                    <TouchableOpacity style={{ height: 40, width: 100, alignItems: 'center' }}>
                        <Icon.Button name="md-send-outline" size={20} color="white" backgroundColor="black"
                            onPress={() => submitChatMessage(message, socketUserId)}>Send</Icon.Button>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>


    );
};

export default ChatScreen;

const styles = EStyleSheet.create({
    addBtn: {
        width: 90,
        height: 45,
        marginTop: 10,
        borderRadius: 10,
        marginBottom: 10
    },

    addItemText: {
        fontSize: 20,
        display: 'flex',
        flexDirection: 'row',
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center'
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
