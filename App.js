/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { Node } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Intro from './Intro';
import LoginNav from './src/navigation/LoginNav';
import 'react-native-gesture-handler';

const rootStack = createStackNavigator();


const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <rootStack.Navigator screenOptions={{ headerShown: false }}>
        <rootStack.Screen name='Intro' component={Intro}></rootStack.Screen>
        <rootStack.Screen name='LoginNav' component={LoginNav}></rootStack.Screen>
      </rootStack.Navigator>
    </NavigationContainer>
  );
};


export default App;
