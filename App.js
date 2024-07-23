import {View, Text, Button} from 'react-native';
import React from 'react';

const App = () => {
  let data = 10;

  const fruit = (val) => {
    console.log(data);
  };
  return (
    <View>
      <Text style={{fontSize:30,alignSelf:'center',color:'green'}}>Hello components</Text>
      <Button
        title="On press"
        color={'red'}
        onPress={() => fruit('Long')}></Button>
      <Button title="On press" color={'green'} onPress={fruit}></Button>
    </View>
  );
};

export default App;
