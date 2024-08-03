import { View, Text } from 'react-native'
import React, { useEffect } from 'react'

const Anotheruseef = (props) => {
  const item = props.info;
  console.log(item,'dfd')
     
    
    useEffect(()=>{
        console.log('only data updata')
        
    },[props.info.data])
  return (
    
    <View>
      <Text>{props.info.data}users components</Text>
    </View>
  )
}

export default Anotheruseef