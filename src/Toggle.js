import {View, Text, Button} from 'react-native';
import React, {useEffect, useState} from 'react';

const Toggle = () => {
  const [show, setShow] = useState(true);

  return (
    <View>
      <Text style={{fontSize: 24}}>Toggle</Text>
      <Button title="show" onPress={() => setShow(!show)} />
      {show ? <User /> : null}
    </View>
  );
};

const User = () => {
  let timer = setInterval(() => {
    console.warn('interval');
  }, 9000);
  useEffect(() => {
    return () => {
      clearInterval(timer);
    };
  });
  return (
    <View>
      <Text>user components</Text>
    </View>
  );
};

export default Toggle;
