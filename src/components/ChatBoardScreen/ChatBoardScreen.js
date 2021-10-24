import React from 'react';
import { FlatList, View } from 'react-native';
import ChatBoardScreenShow from './ChatBoardScreenShow';
import { useSelector } from 'react-redux';

const ChatBoardScreen = () => {
    const auth = useSelector((state) => state.auth);

    const usersData = [
        {
            name: 'person1', id: '100', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQthHVYX7uaGAQbJifvkv4GskIjvp14b9KIAQ&usqp=CAU'
        },
        {
            name: 'person2', id: '200', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVZQy9WBwYP-Zx5s1qeyZJ2fw61ybNjBdiEQ&usqp=CAU'
        },
        {
            name: 'person3', id: '300', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNOhpV67XSI4Vz5Z_L7XoWiH7UzZQDBTzS3g&usqp=CAU'
        }
    ]
    const data = usersData.find(data => data.name == auth.displayName);
    console.log(data, "data")
    
    return (
        <View style={{backgroundColor:'white',flex:1,}}>
            <FlatList
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    marginTop: 5,
                    paddingBottom: 50,
                }}
                keyExtractor={(item, index) => index}
                data={usersData}
                renderItem={itemData =>
                    <ChatBoardScreenShow username={data?.name} userid={data?.id} userImg={data?.img} itemData={itemData.item}></ChatBoardScreenShow>
                }
            >
            </FlatList>
        </View>
    );
};

export default ChatBoardScreen;