import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from '../screens/login/LoginScreen';
import SignUp from '../screens/login/SignUp';

const stack = createStackNavigator();

export default LoginNav = () =>{
    return(
        <stack.Navigator screenOptions={{headerShown:false}}>
            <stack.Screen name='Login' component={LoginScreen}></stack.Screen>
            <stack.Screen name='SignUp' component={SignUp}></stack.Screen>
        </stack.Navigator>
    );
}