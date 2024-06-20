import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import tailwindColor from '../../assests/theme/tailwindColor';
import {Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Reset = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assests/image/reset.png')}
            style={styles.image}
          />
        </View>
        <View style={styles.formContainer}>
          <Text style={styles.heading}>Reset Password</Text>
          <View style={styles.formSpace}>
            <View style={styles.form}>
              <Text style={styles.formTag}>One Time Password</Text>
              <TextInput
                keyboardType="number-pad"
                style={styles.inputBox}
                placeholder="Enter OTP"
                placeholderTextColor={tailwindColor.slate[400]}
              />
            </View>
            <View style={styles.form}>
              <Text style={styles.formTag}>New Password</Text>
              <TextInput
                style={styles.inputBox}
                placeholder="***********"
                placeholderTextColor={tailwindColor.slate[400]}
                secureTextEntry={true}
              />
            </View>
            <View style={styles.form}>
              <Text style={styles.formTag}>Confirm Password</Text>
              <TextInput
                secureTextEntry={true}
                style={styles.inputBox}
                placeholder="***********"
                placeholderTextColor={tailwindColor.slate[400]}
              />
            </View>
            <View style={styles.form}>
              <TouchableOpacity
                style={styles.btnSubmit}
                onPress={() => navigation.navigate('Signin')}>
                <Text style={styles.btnSubmitText}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Reset;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: tailwindColor.blue[700],
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  image: {
    width: 300,
    height: 300,
  },
  formContainer: {
    flex: 1,
    backgroundColor: tailwindColor.slate[200],
    marginTop: 10,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingVertical: 15,
    justifyContent: 'space-between',
  },
  heading: {
    fontSize: 23,
    fontWeight: '700',
    textAlign: 'center',
    color: tailwindColor.slate[700],
    marginBottom: 10,
  },
  formSpace: {
    flex: 1,
    paddingHorizontal: 30,
  },
  form: {
    marginVertical: 5,
  },
  formTag: {
    fontSize: 15,
    color: tailwindColor.slate[500],
    fontWeight: '800',
    marginBottom: 5,
  },
  inputBox: {
    backgroundColor: tailwindColor.slate[300],
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 7,
    width: '100%',
    color: tailwindColor.slate[900],
    fontSize: 15,
  },
  btnSubmit: {
    backgroundColor: tailwindColor.blue[600],
    marginTop: 10,
    paddingVertical: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
  },
  btnSubmitText: {
    fontSize: 18,
    fontWeight: '700',
  },
});
