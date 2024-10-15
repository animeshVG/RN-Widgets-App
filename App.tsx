import { StyleSheet } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from './Screens/SignIn';
import DetailSignIn from './Screens/DetailSignIn';
import Home from './Screens/Home';
import Camera from './Screens/Camera';
import Notification from './Screens/Notification';
import Weather from './Screens/Weather';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Sign-In" component={SignIn} />
        <Stack.Screen name="Detail-SignIn" component={DetailSignIn} />
        <Stack.Screen name="Weather" component={Weather} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="Camera" component={Camera} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
