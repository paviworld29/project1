import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import React from 'react';

const TouchableHighlightExample = () => {
  return (
    <View style={styles.main}>
      <TouchableHighlight style={styles.buttonContainer}>
        <Text style={styles.SuccessText}>Sucess</Text>
      </TouchableHighlight>
      <TouchableHighlight style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Button</Text>
      </TouchableHighlight>
      <TouchableHighlight style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Button</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  buttonContainer: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    margin: 10,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
  },
  SuccessText: {
    fontSize: 24,
    color: 'red',
    textAlign: 'center',
  },
});

export default TouchableHighlightExample;
