import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SignUp from '../screens/login/SignUp';
import LoginScreen from '../screens/login/LoginScreen';

const stack = createStackNavigator();

export default LoginNav = () =>{
    return(
        <stack.Navigator screenOptions={{headerShown:false}}>
            <stack.Screen name='LoginScreen' component={LoginScreen}></stack.Screen>
            <stack.Screen name='SignUp' component={SignUp}></stack.Screen>
        </stack.Navigator>
    );
}