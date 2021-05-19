import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import CreateUserScreen from './CreateUserScreen';
import CustomTabBar from './components/CustomTabBar'
import ItemsList from './ItemsList';
import CreateItem from './CreateItem';
import ItemDetail from './ItemDetail';

// ------------------------APP----------------------------------

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

function MainTabNavigator(){
  return(
    <Tab.Navigator initialRouteName="Home" tabBar={props=><CustomTabBar {...props} />}>
      <Tab.Screen name="Home" component={HomeScreen}/>
    </Tab.Navigator>
  )
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="MainTab" component={MainTabNavigator}/>
        <Stack.Screen name="CreateUser" component={CreateUserScreen}/>
        <Stack.Screen name="ItemsList" component={ItemsList} options={{title: 'Anotações'}}/>
        <Stack.Screen name="CreateItem" component={CreateItem} options={{title: 'Nova Anotação'}}/>
        <Stack.Screen name="ItemDetail" component={ItemDetail} options={{title: 'Detalhes'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;