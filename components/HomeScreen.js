import * as React from 'react';
import { Component } from 'react';
import { useState } from 'react';
import { Button, View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';


export default function HomeScreen({ navigation }) {
  const [count, setCount] = useState(0);
  
  return (
    <View
      style={{
        flex: 2,
        alignItems: 'centre',
        justifyContent: 'centre',
        alignSelf: 'stretch',
      }}>
      <View style={styles.container}>
        <Text style={{ fontSize: 18, marginBottom:20}}>You clicked {count} times</Text>
        <Button onPress={() => setCount(count + 1)} title="Es palielinu skaitu!" />
        <View style={{marginTop:10}}></View>
        <Button onPress={() => setCount(count - 1)} title="Es samazinu skaitu!" />
        <View style={{flex: 1,justifyContent: 'center'}}>
        <Text style={{ fontSize: 18, justifyContent: 'center'}}>See a list of names here:</Text>
        <Text> </Text>
        <Button
         title="List"
          onPress={() => navigation.navigate('ListView')}
        />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'top',
    alignItems: 'center',
    marginTop:40
  },
});