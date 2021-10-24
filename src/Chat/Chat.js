import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
var EventSource = require('eventsource')
const Chat = () => {
    const [data, setUpdateData] = useState(null);
    const [channelName, setChannelName] = useState('');
    const [message, setMessage] = useState('')

    useEffect(() => {
        const url = "http://localhost:9090/stream"
        const source = new EventSource(url);
        source.onmessage = function logEvents(event) {
            setUpdateData(JSON.parse(event?.data));
        }
    }, [])

    useEffect(() => {
        setChannelName(data?.events[0]?.channelName)
        setMessage(data?.events[0]?.payload.message)
    }, [data])


    return (
        <View style={{ flex: 1, backgroundColor: 'green' }}>
            <Text>{channelName}channele</Text>
        </View>
    )
};

export default Chat;