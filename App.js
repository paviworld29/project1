import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import States from './src/States';
import ParenentProp from './src/ParenentProp';
import Foam from './src/Foam';

const App = () => {
  return (
    <ScrollView>
      <View>
       <Foam/>
      </View>
    </ScrollView>
  );
};

export default App;
