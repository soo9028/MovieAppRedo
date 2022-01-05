import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";


const TabComponent = (props) =>{
    const color = props.selected ? "#292929" : "#929292";
    containerStyle.borderBottomColor = color;

    return(
        <TouchableOpacity style={containerStyle} onPress={props.onPress}>
            <Text style={{color: color}}>{props.label}</Text>
        </TouchableOpacity>
    );
}

const containerStyle={
    flex:1,
    borderBottomWidth: 1,
    borderBottomColor: '#929292',
    paddingBottom: 8,
    alignItems: 'center',
    justifyContent: 'center',
}

export default TabComponent;