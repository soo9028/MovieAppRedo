import React, { Component } from 'react'
import { ActivityIndicator } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { View, Text, StyleSheet } from 'react-native'

export default Intro = (props) => {

    AsyncStorage.getItem('email')
        .then((value) => {
            if (value) props.navigation.replace('MainDrawerNav')
            else props.navigation.replace('LoginNav')
        })

    return (
        <View style={style.root}>
            <ActivityIndicator size="large" color="indigo" />
        </View>
    );
};

const style = StyleSheet.create({
    root: { flex: 1, justifyContent: 'center', alignItems: 'center' }
});