import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import TouchableHighlightExample from './src/Touchbalehighlight';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableHighlightExample />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
