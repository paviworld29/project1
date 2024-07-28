import {View, Text, SectionList} from 'react-native';
import React from 'react';

const Sectionlis = () => {
  const users = [
    {
      id: 1,
      name: 'Khushbu',
      email: 'Khush@gmail.com',
      data: ['js', 'c', 'java'],
    },
    {
      id: 2,
      name: 'pavitra',
      email: 'pavi@gmail.com',
      data: ['react-native', 'c', 'java'],
    },
    {
      id: 3,
      name: 'Uttam',
      email: 'uttam@gmail.com',
      data: ['js', 'c', 'python'],
    },
    {
      id: 4,
      name: 'yogesh',
      email: 'yogesh@gmail.com',
      data: ['node', 'c', 'java'],
    },
  ];
  return (
    <View>
      <Text>Sectionlist</Text>
      <SectionList
      sections={users}
      renderItem={({item})=><Text style={{fontSize:24}}>{item}</Text>}
      renderSectionHeader={({section:{name}})=><Text style={{fontSize:25,color:'black'}}>{name}</Text>}/>
    </View>
  );
};

export default Sectionlis;
