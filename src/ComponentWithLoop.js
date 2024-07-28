import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import Loopwith from './Loopwith';

const ComponentWithLoop = () => {
    const users = [
        {
          id: 1,
          name: 'Khushbu',
          email:'Khush@gmail.com'
        },
        {
          id: 2,
          name: 'pavitra',
           email:'pavi@gmail.com'
        },
        {
          id: 3,
          name: 'Uttam',
           email:'uttam@gmail.com'
        },
        {
          id: 4,
          name: 'yogesh',
           email:'yogesh@gmail.com'
        },
         
      ];
  return (
    <View>
      <Text>ComponentWithLoop</Text>
      <FlatList 
      data={users}
      renderItem={({item})=> <Loopwith item={item}/>

      

    }/>
    </View>
  )
}

export default ComponentWithLoop