import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

// screens
import Home from './screens/Home/Home';
import Forget from './screens/Forget/Forget';
import Signin from './screens/Signin/Signin';
import Signup from './screens/Signup/Signup';
import Reset from './screens/Reset/Reset';
import Welcome from './screens/Welcome/Welcome';

const App = () => {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome'>
        <Stack.Screen name="Home" options={{ headerShown: false }} component={Home} />
        <Stack.Screen name="Welcome" options={{ headerShown: false }} component={Welcome} />
        <Stack.Screen name="Signin" options={{ headerShown: false }} component={Signin} />
        <Stack.Screen name="Signup" options={{ headerShown: false }} component={Signup} />
        <Stack.Screen name="Forget" options={{ headerShown: false }} component={Forget} />
        <Stack.Screen name="Reset" options={{ headerShown: false }} component={Reset} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App