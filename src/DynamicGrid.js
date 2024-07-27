import {View, Text} from 'react-native';
import React from 'react';
import styles from './Style/css';

const DynamicGrid = () => {
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
    {
        id: 6,
        name: 'sachin',
      },
      {
        id: 6,
        name: 'sachin',
      },
      {
        id: 6,
        name: 'sachin',
      },  {
        id: 6,
        name: 'sachin',
      },
  ];
  return (
    <View>
      <Text>DynamicGrid</Text>
      <View style={{flexDirection:'row',flexWrap:'wrap'}}>
      {users.map(item => (
        <Text style={styles.item}>{item.name}</Text>
      ))}
      </View>
    </View>
  );
};

export default DynamicGrid;
