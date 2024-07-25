import { View, Text } from 'react-native'
import React from 'react'
import States from './src/States'
import ParenentProp from './src/ParenentProp'


const App = () => {
  return (
    <View>
      <States />
      <ParenentProp />
    </View>
  )
}

export default App