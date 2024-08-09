import { View, Text, ActivityIndicator,StyleSheet, Button } from 'react-native'
import React, { useState } from 'react'

const Activeityindgator = () => {
    const [show,setShow] = useState(false)
    function displayloader(){
        setShow(true)
        setTimeout(() => {
            setShow(false)
        }, 3000);
    }
  return (
    <View style={styles.container}>
      {/* <ActivityIndicator size={'large'} animating={show}/>  */}
      {
        show? <ActivityIndicator size={'large'} /> :null
      }
      <Button title='show' onPress={displayloader}></Button>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }

});

export default Activeityindgator