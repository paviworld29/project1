import { View, Text } from 'react-native'
import React from 'react'

const ChildProps = (params) => {
    console.warn(params.name)
    console.warn(params.age)
    return (
    <View>
      <Text style={{fontSize:15}}>name is {params.name}</Text>
      <Text style={{fontSize:15}}>name is {params.age}</Text>
    </View>
  )
}

export default ChildProps