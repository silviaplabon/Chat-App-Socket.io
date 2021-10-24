import React, {useState} from 'react';
import {StyleSheet, Text, View,Button} from 'react-native';

const MyScreen=()=>{
    const [status,setStatus]=useState('');
    return (
      <View  style={styles.container}>
           <Text testID="myText">{status}</Text>
           <Button testID="myButton" onPress={()=>setStatus('button pressed')} title="pressMe"></Button>
      </View>
    );
  }


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flex: 1,
    justifyContent: 'center',
  },
  instructions: {
    color: '#333333',
    marginBottom: 5,
    textAlign: 'center',
  },
  welcome: {
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
  },
});

export default MyScreen;