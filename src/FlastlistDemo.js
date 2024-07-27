import {View, Text, FlatList, StyleSheet} from 'react-native';
import React from 'react';

const FlastlistDemo = () => {
  const users = [
    {
      id: 1,
      name: 'Khushbu',
    },
    {
      id: 2,
      name: 'pavitra',
    },
    {
      id: 3,
      name: 'Uttam',
    },
    {
      id: 4,
      name: 'yogesh',
    },
    {
      id: 5,
      name: 'nikki',
    },
    {
      id: 6,
      name: 'sachin',
    },
  ];
  return (
    <View>
      <Text>List with flastlist component</Text>
      <FlatList 
        data={users}
        renderItem={({item}) => <Text style={styles.item}>{item.name}</Text>}
        keyExtractor={item=>item.id}
      />
    </View>
  );
};


const styles = StyleSheet.create({
    item:{
        fontSize:24,
        padding:10,
        color:'white',
        backgroundColor:'black',
        borderColor:'white',
        borderWidth:1,
        margin:10

    }
})
export default FlastlistDemo;
