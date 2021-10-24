import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import EStyleSheet from 'react-native-extended-stylesheet';

const ChatShow = (props) => {
    const { delivered, id, text, user, seen, sendTime } = props.item;
    let isSentByCurrentUser = false;
    if (props.item.user === props.name) {
        isSentByCurrentUser = true;
    }
    const dispatch = useDispatch();



    return (
        <>
            {
                isSentByCurrentUser ?
                    <View style={{ alignItems: 'flex-end', marginRight: 10, }}>
                        <View style={[styles.textbox, { backgroundColor: '#128c7e', maxWidth: '80%', padding: 4, borderRadius: 10, marginLeft: 10, marginTop: 5 }]}>
                            <Text style={{ color: 'black', textAlign: 'left', fontSize: 16, alignItems: 'center' }}>{text}
                                <View style={{ textAlign: 'right', height: 20, width: 20, textAlign: 'right', borderRadius: 10, marginTop: 10 }}>
                                    {
                                        (delivered == true && seen == false) &&
                                        <Icon name="md-checkmark-circle-outline" size={20} color="white" />
                                    }
                                    {
                                        (delivered == false && seen == false) &&
                                        <Icon name="md-checkmark-circle-outline" size={20} color="blue" />
                                    }
                                     {
                                        (delivered == true && seen == true) &&
                                        <Icon name="md-checkmark-circle-outline" size={20} color="red" />
                                    }


                                </View>
                            </Text>
                            <Text style={{ color: 'black', fontSize: 11, textAlign: 'right' }}>{sendTime}</Text>
                        </View>



                    </View>
                    :
                    <View style={{ alignItems: 'flex-start', marginLeft: 10 }}>
                        <View style={[styles.textBox, { backgroundColor: '#34B7F1', maxWidth: '80%', borderRadius: 10, marginRight: 10, marginTop: 5 }]}>
                            <Text style={{ color: 'black', textAlign: 'right', fontSize: 16, padding: 5 }}>{text}</Text>
                            <Text style={{ color: 'black', fontSize: 11, textAlign: 'right', margin: 3, }}>{sendTime}</Text>
                        </View>

                    </View>
            }
        </>
    );
};

export default ChatShow;


const styles = EStyleSheet.create({
    textBox: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.50,
        shadowRadius: 4.65,

        elevation: 7,
    }
}
)