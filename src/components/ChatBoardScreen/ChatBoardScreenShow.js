import React, { useEffect } from 'react';
import { Image, Text, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import { updateRoomReceiverInfo } from '../../Redux/Reducer/ReceiverProfileReducer';
import { updateRoomUserInfo } from '../../Redux/Reducer/UserRoomReducer';
import NavigationService from '../../Services/NavigationService'
const ChatBoardScreenShow = (props) => {
    let room;
    const dispatch = useDispatch()
    console.log(props, "props data")
    const { name, img, id } = props.itemData;
    const { username, userid } = props;
    const nameCapitalize = name.charAt(0).toUpperCase() + name.slice(1)

    const handleChatShow = (username, userid, name, img, id) => {
        room = userid + '_' + id;
        console.log(username, room, "room username")
        dispatch(updateRoomUserInfo({ username: username, userroom: room, }))
        dispatch(updateRoomReceiverInfo({ receiver: name, image: img, status: 'offline' }))
        NavigationService.navigate('Chat')
    }
    const roomInfo = useSelector((state) => state.room);
    const typingPerson = useSelector((state) => state.typingUser);
    const receiver = useSelector((state) => state.receiver);

    return (
        <>
            {
                name != username &&

                <View style={{ display: 'flex', flexDirection: 'row', margin: 10, }} >

                    <View style={{ flex: 0.20 }}>
                        <Image style={{ width: 60, height: 60, borderRadius: 50 }}
                            source={{ uri: img }}
                        />
                    </View>
                    <View style={{ borderBottomWidth: 1, borderColor: '#858b97', flex: 0.80, marginLeft: 40 }}>
                        <View style={{ flex: 1, display: 'flex', flexDirection: 'row' }}>
                            <Text style={{ marginTop: 5, color: 'black', fontSize: 18, fontWeight: 'bold', flex: 0.7 }} onPress={() => handleChatShow(username, userid, name, img, id)}>{nameCapitalize}</Text>
                            <Text style={{ flex: 0.3, marginTop: 5, }}>11.54pm</Text>
                        </View>
                        <View style={{ flex: 1, display: 'flex', flexDirection: 'row' }}>
                            {(typingPerson.typing == true && receiver.receiver==name)? <Text style={{ marginTop: 5, fontSize: 14, color: '#25d366' }}>{typingPerson.typingUser} is typing</Text> :
                                <Text style={{ marginTop: 5, color: 'gray', fontSize: 12, flex: 0.75 }}>Silvia: Static message </Text>
                            }
                        </View>
                    </View>
                </View>
            }
        </>

    );
};

export default ChatBoardScreenShow;