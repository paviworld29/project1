import {View, Text, Button, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import ChildProps from './ChildProps';
import styles from './Style/style';

const ParenentProp = () => {
  const [name, setName] = useState('sneha');

  return (
    <View>
      <Text style={[styles.text, {backgroundColor: 'yellow'}]}>
        ParenentProp
      </Text>
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
