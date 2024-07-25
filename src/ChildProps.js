import { View, Text } from 'react-native'
import React from 'react'
import styles from './Style/style'

const ChildProps = (params) => {
    console.warn(params.name)
    console.warn(params.age)
    return (
    <View>
      <Text style={styles.text}>name is {params.name}</Text>
      <Text style={styles.text}>name is {params.age}</Text>
    </View>
  )
}

export default ChildProps