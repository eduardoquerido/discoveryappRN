import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/HomeScreen';
import LoginScreen from './src/LoginScreen';
import CreateUserScreen from './src/CreateUserScreen';

// ------------------------APP----------------------------------

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="CreateUser" component={CreateUserScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;