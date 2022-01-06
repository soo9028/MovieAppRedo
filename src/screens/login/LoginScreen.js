import React, { Component } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import InputComponent from '../../login_components/InputComponent';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default LoginScreen = (props) => {
    return (
        <View style={style.root}>
            <View style={style.content}>

                <Text style={style.logo}>2021{'\n'}Movie Rank</Text>


                <InputComponent onChangeText={(value) => { }} secureTextEntry={false} placeholder='Email'></InputComponent>
                <InputComponent onChangeText={(value) => { }} secureTextEntry={true} placeholder='Password'></InputComponent>

                <Text style={style.resetPW}>Reset Password</Text>

                <View style={{ width: 200, marginBottom: 24 }}>
                    <Button onPress={login} title='로그인' color='#3796EF'></Button>
                </View>

                <Text>
                    Need to sign up? <Text onPress={() => props.navigation.navigate('SignUp')} style={style.signuplink}>Sign Up</Text>
                </Text>

            </View>
            <View style={style.footer}>
                <Text style={style.footerCopyright}>MovieRank App by Crystal</Text>
            </View>
        </View>


    );

};


const login = () => {
    AsyncStorage.setItem('email', 'soo9028@gmail.com')
        .then(() => {
            props.navigation.navigate('SignUp')
        })
};



const style = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 32,
    },
    footer: {
        borderTopWidth: 1,
        borderTopColor: '#D3D3D3',
        padding: 8,
    },
    footerCopyright: {
        color: '#929292',
        textAlign: 'center',
    },
    logo: {
        color: '#292929',
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 32,
    },
    resetPW: {
        width: '100%',
        textAlign: 'right',
        color: '#3796EF',
        marginTop: 8,
        marginBottom: 16,
        marginRight: 8,
    },
    signup: {
        color: '#929292',
        textAlign: 'center',
    },
    signuplink: {
        color: '#3796EF'
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 32,
    }

});