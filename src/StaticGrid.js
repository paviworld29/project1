import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import styles from './Style/css';

const StaticGrid = () => {
  return (
    <View>
      <Text >DyanamicGrid</Text>
      <View style={{flexDirection:'row',flexWrap:'wrap'}}>
        <Text style={styles.item}>Khushbu</Text>
        <Text style={styles.item}>Pavitra</Text>
        <Text style={styles.item}>Uttam</Text>
        <Text style={styles.item}>yogesh</Text>
        <Text style={styles.item}>sachin</Text>
      </View>
    </View>
  );
};
 
export default StaticGrid;
