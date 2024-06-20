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

const Forget = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />
      <View style={styles.topContainer}>
        <TouchableOpacity
          style={styles.btnBack}
          onPress={() => navigation.goBack()}>
          {/* Removed the commented-out ArrowLeftIcon */}
          <Text style={styles.btnCross}>X</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assests/image/forget.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.heading}>Forget Password</Text>
        <Text style={styles.para}>
          Ad fugiat cupidatat aliqua duis consectetur et laborum enim
          consectetur ex consectetur. Et nisi ad duis adipisicing aliquip
          consectetur est cupidatat.
        </Text>
        <View style={styles.formSpace}>
          <View style={styles.form}>
            <Text style={styles.formTag}>Email address</Text>
            <TextInput
              keyboardType="email-address"
              style={styles.InputBox}
              placeholder="Enter your email address"
              placeholderTextColor={tailwindColor.slate[400]}
            />
          </View>

          <View style={styles.form}>
            <TouchableOpacity style={styles.btnSignUp}>
              <Text style={styles.btnSignUpText}>Submit</Text>
            </TouchableOpacity>
          </View>

          {/* Signin option */}
          <View style={styles.btnSignInView}>
            <Text style={styles.btnSignInHeading}>Try again, back to</Text>
            <TouchableOpacity
              style={styles.btnSignIn}
              onPress={() => navigation.navigate('Signin')}>
              <Text style={styles.btnSignInText}> Sign in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Forget;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: tailwindColor.blue[700],
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  topContainer: {
    marginTop: 20,
    marginLeft: 15,
  },
  btnBack: {
    backgroundColor: tailwindColor.slate[300],
    height: 30,
    width: 30,
    borderBottomEndRadius: 15,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnCross: {
    color: tailwindColor.slate[900],
    fontSize: 20,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
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
  para: {

    color: tailwindColor.gray[500],
    paddingHorizontal:30, 
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
  InputBox: {
    backgroundColor: tailwindColor.slate[300],
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 7,
    width: '100%',
    color: tailwindColor.slate[900],
    fontSize: 15,
  },
  btnSignUp: {
    backgroundColor: tailwindColor.blue[600],
    marginTop: 10,
    paddingVertical: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
  },
  btnSignUpText: {
    fontSize: 18,
    fontWeight: '700',
  },
  orText: {
    color: tailwindColor.gray[500],
    fontSize: 15,
    fontWeight: '700',
    marginVertical: 15,
    textAlign: 'center',
  },
  down: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  btn: {
    padding: 7,
    backgroundColor: tailwindColor.slate[300],
    borderRadius: 8,
  },
  btnImage: {
    width: 37,
    height: 37,
  },
  btnSignInView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 18,
  },
  btnSignInHeading: {
    fontSize: 14,
    color: tailwindColor.slate[800],
  },
  btnSignIn: {
    padding: 2,
  },
  btnSignInText: {
    color: tailwindColor.blue[600],
    fontSize: 14,
  },
});
