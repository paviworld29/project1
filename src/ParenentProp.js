import {View, Text, Button, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import ChildProps from './ChildProps';
 
const ParenentProp = () => {
  const [name, setName] = useState('sneha');

  return (
    <View>
     
      <Button
        title="update state"
        onPress={() => {
          setName('aisha');
        }}></Button>
      <ChildProps name={name} age={29} />
    </View>
  );
};

export default ParenentProp;
