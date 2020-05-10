import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

//Screens
import Login from '../screens/Login/Login';
import LandingScreen from '../screens/LandingPage/LandingPage';
import Register from '../screens/Register/Register';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator initialRouteName="LandingScreen" headerMode="none">
      <Stack.Screen name="LandingScreen" component={LandingScreen} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

export default Routes;
