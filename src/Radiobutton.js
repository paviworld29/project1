import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState} from 'react';

const Radiobutton = () => {
  const [radio, setRadio] = useState(1);
  const skills = [
    {
      id:1,
      name:'java'
    },
    {
      id:2,
      name:'node'
    },
    {
      id:3,
      name:'react'
    },
    {
      id:4,
      name:'native'
    }
  ]
  return (
    <View style={styles.container}>
    {
      skills.map((item,index)=>
        <TouchableOpacity key={index} onPress={() => setRadio(item.id)}>
        <View style={styles.wrapper}>
          <View style={styles.radio}>
            {radio === item.id ? <View style={styles.radiobg}></View> : null}
          </View>
          <Text style={styles.redioText}>{item.name}</Text>
        </View>
      </TouchableOpacity>)
    }
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  redioText: {
    fontSize: 24,
  },
  radio: {
    height: 40,
    width: 40,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 20,
    margin: 10,
  },
  radiobg: {
    backgroundColor: 'black',
    height: 28,
    width: 28,
    borderRadius: 20,
    margin: 4,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default Radiobutton;
