import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'
import ChildProps from './ChildProps'

const ParenentProp = () => {
const [name,setName] = useState('sneha')
 
  return (
    <View>
      <Text style={{fontSize:20}}>ParenentProp</Text>
      <Button title='update state' onPress={()=>{setName('aisha')}}></Button>
      <ChildProps name={name} age={29}/>
    </View>
  )
}

export default ParenentProp