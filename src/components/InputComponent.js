import React from 'react';
import { TextInput } from 'react-native';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';

const InputComponent = (props) => {
    return (
        <View style={style.container}>
            <TextInput
                placeholder={props.placeholder}
                secureTextEntry={props.secureTextEntry}
                autoCapitalize='none'
                placeholderTextColor='#c3c2c8'
                sectionColor='#929292'
                style={style.input}>
            </TextInput>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        width: 200,
        height: 40,
        paddingLeft: 16,
        paddingRight: 16,
        borderWidth: 1,
        borderColor: '#FDFEFE',
        borderRadius: 3,
        backgroundColor: '#D0ECE7',
        marginTop: 8,
        marginBottom: 8,
    },
    input: {
        flex: 1,
        color: '#FFFFFF'
    },

});

export default InputComponent;