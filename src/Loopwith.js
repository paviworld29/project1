import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Loopwith = props => {
  const item = props.item;
  console.log(item);

  return (
    <View style={styles.box}>
      <Text style={styles.item}>{item.id}</Text>
      <Text style={styles.item}>{item.name}</Text>
      <Text style={styles.item}>{item.email}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  item: {
    fontSize: 24,
    color: 'orange',
    margin: 5,
    textAlign: 'center',
  },
  box: {
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: 'orange',
    margin: 10,
  },
});
export default Loopwith;
