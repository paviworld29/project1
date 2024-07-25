import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import React, {useState} from 'react';

const Foam = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [display, setDisplay] = useState(false);

  return (
    <View>
      <Text style={styles.textstyle}>Foam in react-native</Text>
      <TextInput
        placeholder="enter your name"
        style={styles.stytext}
        placeholderTextColor={'white'}
        value={name}
        onChangeText={text => {
          setName(text);
        }}
      />
      <TextInput
        placeholder="enter your email"
        style={styles.stytext}
        placeholderTextColor={'white'}
        value={email}
        onChangeText={text => {
          setEmail(text);
        }}
      />
      <TextInput
        placeholder="enter your password"
        style={styles.stytext}
        placeholderTextColor={'white'}
        value={password}
        onChangeText={text => {
          setPassword(text);
        }}
        secureTextEntry={true}
      />

      <View>
        {display ? (
          <View>
            <Text style={styles.text}>user name is :{name}</Text>
            <Text style={styles.text}>user email is :{email}</Text>
            <Text style={styles.text}>user password :{password}</Text>
          </View>
        ) : null}
      </View>
      <Button
        title="clear data"
        onPress={() => {
          setEmail('');
          setName('');
          setPassword('');
          setDisplay(false)
        }}></Button>
      <Button
        title="show data"
        onPress={() => {
          setDisplay(true);
        }}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  textstyle: {
    fontSize: 23,
    color: 'black',
    alignSelf: 'center',
  },
  stytext: {
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    margin: 10,
    fontSize: 20,
    backgroundColor: 'black',
    color: 'white',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  text: {
    fontSize: 20,
    alignSelf: 'center',
    margin: 10,
  },
});
export default Foam;
