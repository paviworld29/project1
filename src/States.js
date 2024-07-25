import { View, Text, Button, TextInput } from 'react-native'
import React, { useState } from 'react'

const States = () => {
  const [name,setName] = useState(10);
  let data = 'sam'
   function testName (){
    setName('ijrj')
    data= 'peter'
  }
  return (
    <View>
      <Text style={{fontSize:32}}>{name}</Text>
      <Text style={{fontSize:32}}>{data}</Text>
      <Button title='update name' onPress={testName}></Button>
      <TextInput placeholder='enter email' onChangeText={(text)=>{
        
        setName(text)}}></TextInput>
    </View>
  )
}

export default States;