import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import tailwindColor from '../../assests/theme/tailwindColor';
import {useNavigation} from '@react-navigation/native';

const Welcome = () => {
  const navigation = useNavigation();

  const goToSignIn = () => {
    navigation.navigate('Signin');
  };

  const goToSignUp = () => {
    navigation.navigate('Signup');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />

      <View>
        <Text style={styles.heading}>Let's Get Started</Text>
      </View>

      <View>
        <Image
          style={styles.imageHolder}
          source={require('../../assests/image/welcome.png')}
        />
      </View>

      <View style={styles.btns}>
        {/* btn Sign up  */}
        <TouchableOpacity style={styles.btnSignUp} onPress={goToSignUp}>
          <Text style={styles.btnSignUpText}>Sign Up</Text>
        </TouchableOpacity>

        {/* btn Sign in */}
        <View style={styles.btnSignInView}>
          <Text style={styles.btnSignInHeading}>Already have an account?</Text>
          <TouchableOpacity style={styles.btnSignIn} onPress={goToSignIn}>
            <Text style={styles.btnSignInText}> Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: tailwindColor.blue[700],
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 40,
    fontWeight: '700',
    color: tailwindColor.slate[200],
    padding: 10,
  },
  imageHolder: {
    height: 300,
    width: 300,
  },
  btns: {
    width: '70%',
  },
  btnSignUp: {
    backgroundColor: tailwindColor.slate[300],
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnSignUpText: {
    fontSize: 20,
    fontWeight: '600',
    color: tailwindColor.gray[800],
  },
  btnSignInView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  btnSignInHeading: {
    fontSize: 16,
    color: tailwindColor.slate[200],
  },
  btnSignIn: {
    padding: 2,
    margin: 4,
  },
  btnSignInText: {
    color: tailwindColor.yellow[300],
    fontSize: 16,
  },
});
