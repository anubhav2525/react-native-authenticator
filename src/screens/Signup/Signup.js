import { StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tailwindColor from '../../assests/theme/tailwindColor'
import { Image } from 'react-native'

const Signup = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />
      <View>
        <TouchableOpacity style={styles.btnBack}>
          {/* <ArrowLeftIcon size={20} color="black" /> */}
          <Text style={styles.btnCross}>X</Text>
        </TouchableOpacity>
      </View>
      <View><Image source={require('../../assests/image/Signup.png')} style={{ width: 250, height: 250 }} /></View>


    </SafeAreaView>
  )
}

export default Signup

const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: tailwindColor.blue[700]

  }, btnBack: {
    backgroundColor: tailwindColor.slate[300],
    height: 40,
    width: 40,
    marginTop: 40,
    marginLeft: 20,
    borderBottomEndRadius: 15,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5
  }, btnCross: {

  }
})