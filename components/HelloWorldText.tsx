import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const HelloWorldText = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Hola Mundo!</Text>
    </View>
  )
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#7a5447',
            maxHeight:64,
            borderRadius:20,
            padding:20
        },
        texto:{
            color:'#fbedd6',
            fontSize:20,
            fontWeight:'bold',
            fontFamily:"Space Mono"
        }
    }
)

export default HelloWorldText