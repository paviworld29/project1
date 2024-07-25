import {View, Text, Button, TextInput, StyleSheet} from 'react-native';
import React, {useState} from 'react';

const States = () => {
  const [name, setName] = useState('');
  console.log(name)
  let data = 'sam';
  function testName() {
    setName('');
  }
  return (
    <View>
      <Text style={{fontSize: 32}}>your name is {name}</Text>
      <Text style={{fontSize: 32}}>{data}</Text>
      <Button title="update name" onPress={testName}></Button>
      <TextInput
        placeholder="enter email"
        style={styles.TextInput}
        value={name}
        onChangeText={text => {
          setName(text);
        }}></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  TextInput: {
    fontSize: 18,
    padding: 10,
    margin: 10,
    borderWidth: 2,
    borderColor: 'red',
    color: 'red',
  },
});

export default States;
