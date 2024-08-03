import {View, Text, Button} from 'react-native';
import React, {useEffect, useState} from 'react';
import Anotheruseef from './Anotheruseef';

const Useeffec = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(100);
  //   console.warn(count)
//   useEffect(() => {
//     console.log('pavi');
//   }, [count]);
  return (
    <View>
      <Text style={{fontSize: 24}}>
        {data}UseEffect {count}
      </Text>
      <Button title="update" onPress={() => setCount(count + 1)} />
      <Button title="update data" onPress={() => setData(data + 1)} />
        <Anotheruseef info={{data,count}}/>
    </View>
  );
};

export default Useeffec;
