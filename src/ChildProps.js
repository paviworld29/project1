import { View, Text } from 'react-native'
import React from 'react'
 
const ChildProps = (params) => {
    console.warn(params.name)
    console.warn(params.age)
    return (
    <View>
      <Text >name is {params.name}</Text>
      <Text  >name is {params.age}</Text>
    </View>
  )
}

export default ChildProps