
import React, { Component } from "react";
import { TextInput, StyleSheet, Text, View } from "react-native";
import io from "socket.io-client";
import { Provider } from 'react-redux';
import MainStackScreen from "./src/Routes/MainStackScreen";
import { store } from "./src/Redux/Reducer/Store";

const App = () => {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     chatMessage: "",
  //     chatMessages: []
  //   };
  // }
  // useEffect(()=>{

  // })

  // componentDidMount() {
  //   this.socket = io("http://192.168.0.110:4000");
  //   this.socket.on("chat message", msg => {
  //     this.setState({ chatMessages: [...this.state.chatMessages, msg] });
  //   });
  // }

  // submitChatMessage() {
  //   this.socket.emit("chat message", this.state.chatMessage);
  //   this.setState({ chatMessage: "" });
  // }
  // console.log(state.chatMessage,);
  // render() {
  //   const chatMessages = this.state.chatMessages.map(chatMessage => (
  //     <Text key={chatMessage}>{chatMessage}</Text>
  //   ));

    return (
      // <View style={styles.container}>
      //   <TextInput
      //     style={{ height: 40, borderWidth: 2 }}
      //     autoCorrect={false}
      //     value={this.state.chatMessage}
      //     onSubmitEditing={() => this.submitChatMessage()}
      //     onChangeText={chatMessage => {
      //       this.setState({ chatMessage });
      //     }}
      //   />
      //   {chatMessages}
      // </View>
      <Provider store={store}>
        <MainStackScreen></MainStackScreen>
      </Provider>
    );
  }


export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  }
});
