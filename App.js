import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import TouchableHighlightExample from './src/Touchbalehighlight';
import Radiobutton from './src/Radiobutton';
import Activeityindgator from './src/Activeityindgator';
 
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Activeityindgator />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
