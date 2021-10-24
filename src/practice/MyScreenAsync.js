import React, {useState,useEffect} from 'react';
import {StyleSheet, Text, View,Button} from 'react-native';

const MyScreenAsync=()=>{
    const [status,setStatus]=useState('');
    useEffect(()=>{
      setTimeout(()=>{
          setStatus('timeout is called')
      },1000);
    },[])
    return (
      <View  style={styles.container}>
           <Text testID="myText">{status}</Text>
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

export default MyScreenAsync;